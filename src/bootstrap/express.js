import express from 'express';
import cors from 'cors';
import glob from 'glob';
import path from 'path';

import { errorHandler } from './error.handler';
import { responseHandler } from './response.handler';
import { LOG } from '../config/winston';
import { mongoConnect } from './database';

mongoConnect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(responseHandler);

/**
 * load all routes files
 */
const routePath = path.join(__dirname, '..', 'modules/**/*.routes.js');
glob.sync( routePath ).forEach( function( file ) {
    LOG.info(`Routes file loaded ${file}`);
    const { routes } = require(path.resolve(file));
    if (routes) {
        routes(app);
    }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    return res.ERROR({}, '404 Not found', 404);
});

export default app;