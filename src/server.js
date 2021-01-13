require('dotenv-safe/config');
const logger = require('./configurations/logger');
const terminate = require('./configurations/terminate');

const { PORT } = process.env;

const app = require('./configurations/app');

const server = app.listen(PORT, () => {
    logger.info(`node-essential start on port ${PORT}`);
    terminate(server);
});
