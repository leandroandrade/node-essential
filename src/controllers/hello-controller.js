'use strict';

const repository = require('../repository/hello-repository');

const controller = async (req, res) => {
    const message = await repository();

    return res.status(200).send({
        title: "hello",
        message: message
    });
};

module.exports = controller;