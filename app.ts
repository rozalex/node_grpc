import express, {Application, Request, Response} from 'express';
import {logger, validator, authenticator, error} from './src/middleware';
import {work, settings, user} from './src/routes';

const app: Application = express();

app.use(logger);
app.use(validator);
app.use(error);

app.use(authenticator);
app.use(error);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(settings);
app.use(user);
app.use(work);

/** Rules of our API */
app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.get('/app*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: './'});
});
export default app;
