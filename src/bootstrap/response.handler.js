import { LOG } from "../config/winston";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const responseHandler = (req, res, next) => {
    const start = Date.now();
    res.once('finish', () => {
        const duration = Date.now() - start; 
        LOG.info("Time taken to process " + req.originalUrl + " is: " +  duration);
    });
    res.JSON = (data, message, statusCode = 200) => {
        return res.status(statusCode).json({
            data: data,
            message: message,
            statusCode: statusCode,
            status: true
        });
    }
    res.ERROR = (data, message, statusCode = 500) => {
        return res.status(statusCode).json({
            data: data,
            message: message,
            statusCode: statusCode,
            status: false
        });
    }
    next();
};