'use strict';

const router = require('express').Router();

const { version } = require('../../package');

const controller = require('../controllers/hello-controller');

router.get('/', (_, res) => res.json({
    title: "node-essential working",
    version
}));

router.get('/hello', controller);

module.exports = router;