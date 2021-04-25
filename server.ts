import app from './app';
import log from './src/utils/logging/logging';

app.listen(8000, () => {
    log.info('server', 'server started on port: ' + 8000);
});
