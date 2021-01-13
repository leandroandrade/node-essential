const log = require('../logger');

const shutdown = (signal, server) => {
    log.info(`${signal} signal received`);

    log.info('Closing HTTP server...');
    server.close(async () => {
        log.info('HTTP server closed!');

        process.exit(0);
    });
};

module.exports = server => {
    process.on('SIGTERM', () => shutdown('SIGTERM', server));
    process.on('SIGINT', () => shutdown('SIGINT', server));
};
