module.exports = class InvalidInputError extends Error {
    constructor(message, statusCode) {
        super(message || 'Input error');
        this.name = 'InvalidInputError';
        this.statusCode = statusCode || 400;
        this.date = new Date();
    }
};
