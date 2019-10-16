'use strict';

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`node-essential start on port ${ PORT }`));