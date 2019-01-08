'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Routes
const index = require('./routes/index');
const hello = require('./routes/hello');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', index);
app.use('/hello', hello);

module.exports = app;