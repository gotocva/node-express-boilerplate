

import dotenv from 'dotenv';
const env = dotenv.config().parsed;

export const PORT = env.PORT || 3003;

export const MONGO = {
    HOST : env.MONGO_HOST || '127.0.0.1',
    PORT : env.MONGO_PORT || 27017,
    DATABASE : env.MONGO_DATABASE || 'boilerplate',
}