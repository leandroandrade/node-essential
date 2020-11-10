const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format(info => ((info.level = info.level.toUpperCase()), info))(),
        format.errors({ stack: true }),
        format.colorize(),
        format.timestamp({
            format: 'DD/MM/YYYY HH:mm:ss',
        }),
        format.printf(info => {
            const { timestamp, level, code, stack, message } = info;

            const newCode = code ? ` ${code}` : '';
            const newMessage = stack || message;
            return `[${timestamp}] ${level}${newCode}: ${newMessage}`;
        })
    ),
    transports: [
        new transports.Console({
            silent: process.env.NODE_ENV === 'test',
        }),
    ],
    exitOnError: false,
});

module.exports = logger;
