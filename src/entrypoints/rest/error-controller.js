const { InvalidInputError } = require('../../commons/errors');

exports.error = async (req, res, next) => {
    return next(new InvalidInputError(`This is a simple error example!`));
};
