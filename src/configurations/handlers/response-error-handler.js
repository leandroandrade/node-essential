module.exports = (err, req, res, next) => {
    const { status, messages } = err;
    const response = {
        mensagens: messages || [
            { codigo: status || 500, mensagem: 'Ocorreu um erro no servidor.' },
        ],
    };

    return res.status(status || 500).send(response);
};
