const express = require('express');
const path = require('path');
const yamljs = require('yamljs');
const swaggerUi = require('swagger-ui-express');

module.exports = app => {
    const swagger = path.join(__dirname, '..', '..', '..', 'swagger', 'example-swagger.yaml');
    const document = yamljs.load(swagger);

    app.use('/api-specs', express.static(swagger));
    app.use(
        '/api-docs',
        (req, res, next) => {
            document.host = req.get('host');
            req.swaggerDoc = document;
            next();
        },
        swaggerUi.serve,
        swaggerUi.setup()
    );
};
