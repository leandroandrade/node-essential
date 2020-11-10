const express = require('express');
require('express-async-errors');

const app = express();

const setApp = require('./configurations/app');
const setRoutes = require('./configurations/routes');
const setHandlers = require('./configurations/handlers');

setApp(app);
setRoutes(app);
setHandlers(app);

module.exports = app;
