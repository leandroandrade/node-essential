'use strict';

const repository = require('../repository/hello-repository');

exports.get = async (req, res) => {
    const message = await repository.get();

    res.status(200).send({
        title: "hello",
        message: message
    });
};