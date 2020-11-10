const createError = require('http-errors');

exports.createErrors = (statusCode, mensagens = []) => {
    const mapMessages = mensagens.map(mensagem => ({ codigo: statusCode, mensagem }));

    return createError(statusCode, { messages: mapMessages });
};

exports.createError = (statusCode, mensagem) => {
    return createError(statusCode, {
        messages: mensagem ? [{ codigo: statusCode, mensagem }] : [],
    });
};
