import {cyan, bgRed, green, yellow} from 'chalk';

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object));
    } else {
        console.info(cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`));
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object));
    } else {
        console.warn(yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`));
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(bgRed(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object));
    } else {
        console.error(bgRed(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(green(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object));
    } else {
        console.debug(green(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`));
    }
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};

export default {
    info,
    warn,
    error,
    debug
};
