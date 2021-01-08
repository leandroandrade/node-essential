const { repository } = require('../../dataproviders/repositories/hello-repository');

exports.controller = async (req, res) => {
    const message = await repository();

    return res.json({
        title: 'hello',
        message,
    });
};
