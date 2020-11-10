const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = app => {
    app.use(cors());
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
};
