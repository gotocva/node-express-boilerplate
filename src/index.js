
import app from './bootstrap/express';
import { LOG } from './config/winston';
import { env } from './environments';


app.listen(env().PORT, () => { LOG.info(`Server running on port ${env().PORT}`)});