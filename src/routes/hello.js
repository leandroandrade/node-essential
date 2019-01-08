'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/hello-controller');

router.get('/', controller.get);

module.exports = router;