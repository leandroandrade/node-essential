require('dotenv-safe').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
require('express-async-errors');

const app = express();

const setUp = require('../setup');
const setDocs = require('../documentation');
const setRoutes = require('../routes');
const setHandlers = require('../handlers');

setUp(app);
setDocs(app);
setRoutes(app);
setHandlers(app);

module.exports = app;
