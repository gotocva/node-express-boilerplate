import winston from 'winston';

const options = winston.LoggerOptions = {
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.printf(
            ({ timestamp, level, label, message, stack, ...rest }) => {
                const namespace = label ? `(${label})` : '';
                const errStack = stack ? `\n${stack}` : '';
                return `[${timestamp}] ${level}: ${namespace} ${message} ${errStack}`;
            }
        )
    ),
    transports: [
        new winston.transports.Console({ level: process.env.ENV === 'production' ? 'debug' : 'debug' }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
    ]
};

export const LOG = winston.createLogger(options);