import {Request, Response, Router, NextFunction} from 'express';
import log from '../utils/logging/logging';

const middlewareRouter = Router();

middlewareRouter.use((req: Request, res: Response, next: NextFunction) => {
    const {method, url} = req;
    const namespace = 'logger';

    /** Log the request */
    log.info(namespace, url);

    res.on('finish', () => {
        /** Log the response */
        log.info(namespace, `METHOD: [${method}] - URL: [${url}] - STATUS: [${res.statusCode}]`);
    });
    next();
});

export const logger = middlewareRouter;
