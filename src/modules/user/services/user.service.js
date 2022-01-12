import { User } from "../models/user.schema"


/**
 * 
 * @param {*} query 
 */
export const _login = (query) => {
    return new Promise((resolve, reject) => {
        User.findOne(query).exec((error, result) => {
            if (error || result == null) {
                reject('User not found');
            } else {
                resolve(result);
            }
        })
    })
}

export const store = (userData) => {
    return new Promise((resolve, reject) => {
        const user = new User(userData);
        user.save((error, result) => {
            console.log(error, result);
            if (error) {
                reject('Unable to create an account');
            } else {
                resolve(result);
            }
        })
    })
}