import {Request} from 'express';

type Context = {
    userId?: string;
    sub?: string;
    tabulaini?: string;
    dname?: string;
    tenantid?: string;
    version?: string;
    token?: string;
    auth?: string;
};

export const getAuth = (req: Request) => {
    const authorization = req.get('authorization');

    return {
        auth: authorization?.replace(/bearer /gi, ''),
        token: authorization
    };
};

export const setContext = (req: any, params: any) => {
    req.context = {
        ...req.context,
        ...params
    } as Context;
};

export const getContext = (req: any): Context => {
    return req.context;
};
