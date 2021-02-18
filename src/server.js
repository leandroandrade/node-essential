const logger = require('./configurations/logger');
const exit = require('./configurations/exit');

const app = require('./configurations/app');

const server = app.listen(process.env.PORT, () => {
    logger.info(`node-essential start on port ${process.env.PORT}`);
    exit(server);
});
