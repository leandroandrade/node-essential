'use strict';

const app = require('./src/app');

const { getConfigurations } = require('./src/configuration/configurations');

const { PORT } = getConfigurations();

app.listen(PORT, () => {
    console.log(`node-essential start on port ${ PORT }`)
});