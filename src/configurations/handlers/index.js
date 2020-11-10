const errorHandler = require('./error-handler');
const responseErrorHandler = require('./response-error-handler');

module.exports = app => {
    app.use(errorHandler);
    app.use(responseErrorHandler);
};
