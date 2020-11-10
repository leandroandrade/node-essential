const logger = require('../logger');

module.exports = (err, req, res, next) => {
    logger.error('Server ERROR:', err);

    next(err);
};
