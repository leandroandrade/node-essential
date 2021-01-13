const log = require('../logger');

const exit = (signal, server) => {
    log.info(`${signal} signal received`);

    log.info('Closing HTTP server...');
    server.close(() => {
        log.info('HTTP server closed!');

        process.exit(0);
    });
};

module.exports = server => {
    process.on('SIGTERM', () => exit('SIGTERM', server));
    process.on('SIGINT', () => exit('SIGINT', server));
};
