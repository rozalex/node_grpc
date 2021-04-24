import {Request, Response, Router, NextFunction} from 'express';
import {customer, license} from '../rpc';
import {StatusError} from '../utils/errorHandler/StatusError';
import {ModuleCheckResult} from '../../proto/license_pb';
import {appid} from '../consts/configuration';
import {setContext} from '../utils/request/request';

const middlewareRouter = Router();

middlewareRouter.all(
    '/:api/:tenantName/:lang/*',
    async (req: Request, res: Response, next: NextFunction) => {
        const {tenantName} = req.params;

        const tenant: any = await customer.getTenantByName(tenantName);
        const {licenseid, tenantid, dname, tabini: tabulaini, version} = tenant;
        const licenseResponse: any = await license.assapiValid(licenseid, appid);
        const checkResult = licenseResponse.checkresult;

        switch (checkResult) {
            case ModuleCheckResult.CheckResult.EXPIRED:
                next(new StatusError(403, 'license expired'));
                return;
            case ModuleCheckResult.CheckResult.INVALID:
                next(new StatusError(403, 'license invalid'));
                return;
            case ModuleCheckResult.CheckResult.VALID:
                break;
            default:
        }

        setContext(req, {
            tabulaini,
            dname,
            tenantid,
            version
        });

        next();
    }
);

export const authenticator = middlewareRouter;
