const { error } = require('../../entrypoints/rest/error-controller');

module.exports = router => {
    router.get('/error', error);
};
