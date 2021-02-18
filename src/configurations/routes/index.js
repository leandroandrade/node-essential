const router = require('express').Router();
const fg = require('fast-glob');

module.exports = app => {
    app.use('/api/v1', router);

    fg.sync('**/src/configurations/routes/**routes.js').forEach(file =>
        require(`../../../${file}`)(router)
    );
};
