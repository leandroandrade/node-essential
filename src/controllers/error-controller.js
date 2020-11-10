const { createError } = require('../commons/http-error');

exports.error = async (req, res, next) => {
    return next(createError(400, `This is a simple error example!`));
};
