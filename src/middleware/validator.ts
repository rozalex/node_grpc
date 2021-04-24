import {Request, Response, Router, NextFunction} from 'express';
import {verify, decode} from 'jsonwebtoken';
import jwksClient, {SigningKey} from 'jwks-rsa';
import {StatusError} from '../utils/errorHandler/StatusError';
import {getAuth, setContext} from '../utils/request/request';
import {development, devContext} from '../consts/configuration';

const middlewareRouter = Router();

middlewareRouter.use((req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === development) {
        setContext(req, devContext);
        next();
        return;
    }

    try {
        const {auth, token} = getAuth(req);

        if (!auth) {
            next(new StatusError(401, 'no credentials sent'));
            return;
        }

        const decoded: any = decode(auth, {complete: true});
        if (!decoded || !decoded.header || !decoded.payload) {
            next(new StatusError(401, 'invalid credentials'));
            return;
        }

        const {header, payload} = decoded;
        const {kid} = header;
        const {iss, sub} = payload;

        if (!kid || !iss) {
            next(new StatusError(401, 'invalid credentials'));
            return;
        }

        const client = jwksClient({
            jwksUri: `${iss}.well-known/jwks.json`
        });

        if (!client) {
            next(new StatusError(401, 'invalid credentials'));
            return;
        }

        client.getSigningKey(kid, (err: any, key: SigningKey) => {
            try {
                verify(auth, key.getPublicKey());
                setContext(req, {sub, token, auth});
                next();
            } catch (error) {
                next(new StatusError(401, error));
            }
        });
    } catch (error) {
        next(new StatusError(401, error));
    }
});

export const validator = middlewareRouter;
