const { controller } = require('../../entrypoints/rest/hello-controller');

module.exports = router => {
    router.get('/hello', controller);
};
