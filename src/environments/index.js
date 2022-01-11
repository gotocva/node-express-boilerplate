
import dotenv from 'dotenv';

const _env = dotenv.config().parsed;

import * as devEnv from './development';
import * as prodEnv from './production';

export const env = () => {
    if (_env.ENV && _env.ENV == 'production') {
        return prodEnv;
    } else {
        return devEnv;
    }
}