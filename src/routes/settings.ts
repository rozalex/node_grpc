import {Request, Response, Router} from 'express';
import {gateway} from '../rpc';
import {messages} from '../consts/configuration';
import {getContext} from '../utils/request/request';

const router = Router();

router.get('/:api/:tenantName/:lang/settings', async (req: Request, res: Response) => {
    const {lang} = req.params;
    const {tenantid} = getContext(req);

    const resp: any = await gateway.getTextMessage(messages, lang, tenantid);
    res.status(200).json({languages: [], messages: resp.msgsMap});
});

export const settings = router;
