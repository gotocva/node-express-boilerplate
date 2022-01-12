import mongoose from "mongoose";

import { env } from '../environments/index';

/**
 * 
 */
export const mongoConnect = () => {
    try {
        // mongodb connection established
        const _uri = `mongodb://${env().MONGO.HOST}:${env().MONGO.PORT}/${env().MONGO.DATABASE}`;
        console.log(`mongodb connecturl ${_uri}`);
        const _options = { useNewUrlParser: true, useUnifiedTopology: true }
        mongoose.connect(_uri, _options,(error) => {
            if(error){
                console.error('Error : unable to connect mongodb\n'+error);
            }else{
                console.error(`Mongodb connected successfully`);
            }
        });
    } catch (exp) {
        console.log('Exception occurs'+exp);
    }
}