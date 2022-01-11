import { LOG } from '../config/winston';

const errorObject = {
    1: {
        'msg': {
            'EN': 'User does not exist.'
        }
    },
    2: {
        'msg': {
            'EN': 'Incorrect password.'
        }
    },
    3: {
        'msg': {
            'EN': 'User is not authenticated.'
        }
    },
    4: {
        'msg': {
            'EN': 'User is not authorized to visit the api.'
        }
    },
    5: {
        'msg': {
            'EN': 'Only JPEG, JPG, PNG format images allowed.'
        }
    },
    10: {
        'msg': {
            'EN': 'Street Address is required.'
        }
    },
    11: {
        'msg': {
            'EN': 'Postal Code is required.'
        }
    },
    12: {
        'msg': {
            'EN': 'City is required.'
        }
    },
    13: {
        'msg': {
            'EN': 'State is required.'
        }
    },
    14: {
        'msg': {
            'EN': 'Country is required.'
        }
    },
};

export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    LOG.error(JSON.stringify(err));
    if (err.message && typeof err.message === 'number') {
        err.msgCode = err.message;
    }

    if (err.name == 'ValidationError') {
        return res.json({
            success: 0,
            message: err.errors,
            response: 400,
            data: {}
        });
    } else {
        if (err.msgCode == 3) {
            res.status(401);
            err.status = 401;
        }
        if (err.msgCode == 4) {
            res.status(200);
            err.status = 403;
        }

        if (err.status == 404) {
            return res.json({
                success: 0,
                message: 'Not Found.',
                response: 404,
                data: {}
            });
        } else if (err.status == 401) {
            return res.json({
                success: 0,
                message: errorObject[err.msgCode].msg.EN,
                response: 401,
                data: {}
            });
        } else {
            if (!err.msgCode) {
                res.status(200);
                return res.json({
                    success: 0,
                    message: err.message,
                    response: 400,
                    data: {}
                });
            } else {
                if (err.msgCode === '0005') {
                    return res.json({
                        success: 0,
                        message: err.message,
                        response: 400,
                        data: {}
                    });
                } else {
                    res.status(200);
                    return res.json({
                        success: 0,
                        message: errorObject[err.msgCode].msg.EN,
                        response: 400,
                        data: {}
                    });
                }
            }
        }
    }
};