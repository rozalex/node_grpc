import {Request, Response, NextFunction} from 'express';
import {StatusError} from '../utils/errorHandler/StatusError';
import log from '../utils/logging/logging';

export const error = (err: StatusError, req: Request, res: Response, next: NextFunction) => {
    const {message, statusCode} = err;

    log.error('ErrorHandler', message);

    if (statusCode === 401) {
        res.redirect('/');
    } else {
        res.status(statusCode).json({
            status: statusCode,
            message: message
        });
    }
};
