const { createErrors } = require('../commons/http-error');

exports.error = async (req, res, next) => {
    return next(createErrors(400, `This is a simple error example!`));
};
