require('dotenv-safe/config');
const logger = require('./configurations/logger');

const { PORT } = process.env;

const app = require('./configurations/app');

app.listen(PORT, () => logger.info(`node-essential start on port ${PORT}`));
