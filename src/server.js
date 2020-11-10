require('dotenv-safe/config');
const logger = require('./configurations/logger');
const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => logger.info(`node-essential start on port ${PORT}`));
