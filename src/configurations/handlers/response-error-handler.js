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

    return res.status(500).send({
        messages: messages || [{ code: 500, message: 'Ocorreu um erro no servidor.', date }],
    });
};
