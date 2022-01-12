

import Joi from 'joi';

const registerSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    token: Joi.string().required(),
    email: Joi.string().email().required()
})


export const registerValidator = (req, res, next) => {
    const { error, value } = registerSchema.validate(req.body);
    if (error == undefined) {
        next();
    } else {
        return res.ERROR(error, 'Validation error', 420);
    }
}