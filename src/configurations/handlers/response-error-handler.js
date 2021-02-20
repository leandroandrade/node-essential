const { httpErrors } = require('../../commons/http');

module.exports = (err, req, res, next) => {
    const { statusCode, messages, message, date = new Date() } = err;

    if (statusCode && messages) {
        return res.status(statusCode).send({ messages });
    }

    if (statusCode && message) {
        return res.status(statusCode).send({
            messages: [{ code: statusCode, message, date }],
        });
    }

    return res.status(httpErrors.INTERNAL_SERVER_ERROR).send({
        messages: messages || [
            { code: httpErrors.INTERNAL_SERVER_ERROR, message: 'Internet Server Errror', date },
        ],
    });
};
