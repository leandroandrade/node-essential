module.exports = (err, req, res, next) => {
    // console.error('Server ERROR:', err);

    next(err);
};
