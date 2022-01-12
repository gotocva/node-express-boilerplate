import dotenv from 'dotenv';

const env = dotenv.config().parsed;

export const PORT = env.PORT || 3000;

export const MONGO = {
    HOST : env.MONGO_HOST || 'localhost',
    PORT : env.MONGO_PORT || 27017,
    DATABASE : env.MONGO_DATABASE || 'boilerplate',
}