const router = require('express').Router();

const { version } = require('../../../package.json');
const { controller } = require('../../entrypoints/rest/hello-controller');
const { error } = require('../../entrypoints/rest/error-controller');

module.exports = app => {
    router.get('/', (_, res) =>
        res.json({
            title: 'node-essential working',
            version,
        })
    );
    router.get('/hello', controller);
    router.get('/error', error);

    app.use('/api/v1', router);
};
