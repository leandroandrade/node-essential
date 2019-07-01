'use strict';

const ini = require('ini');
const fs = require('fs');

const data = {
    config: null
};

(() => {
    data.config = ini.parse(fs.readFileSync('./configurations.ini', 'utf-8'));
})();

const getConfigurations = () => {
    return data.config;
};

module.exports = {
    getConfigurations
};