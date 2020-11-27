const errors = require('../../../../src/commons/errors');

const { InvalidInputError } = errors;

describe('errors test', () => {
    it('should return values specified in InvalidInputError', async done => {
        const err = new InvalidInputError('Some message', 401);
        const { message, statusCode, name } = err;

        expect(statusCode).toBe(401);
        expect(message).toBe('Some message');
        expect(name).toBe('InvalidInputError');

        done();
    });

    it('should return values default in InvalidInputError', async done => {
        const err = new InvalidInputError();
        const { message, statusCode, name } = err;

        expect(statusCode).toBe(400);
        expect(message).toBe('Input error');
        expect(name).toBe('InvalidInputError');

        done();
    });
});
