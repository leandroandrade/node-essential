const express = require('express');
require('express-async-errors');

const app = express();

const setApp = require('./configurations/app');
const setDocs = require('./configurations/documentation');
const setRoutes = require('./configurations/routes');
const setHandlers = require('./configurations/handlers');

setApp(app);
setDocs(app);
setRoutes(app);
setHandlers(app);

module.exports = app;
