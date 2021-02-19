const { join } = require('path');

module.exports = {
    test: join(__dirname, '..', '..', '..', '.env.test'),
    production: join(__dirname, '..', '..', '..', '.env.production'),
    default: join(__dirname, '..', '..', '..', '.env'),
};
