const httpErrors = require('../../../src/commons/http-error');

describe('http errors test', () => {
    it('should return list of 2 createErrors', async done => {
        const err = httpErrors.createErrors(400, ['Message 1', 'Message 2']);
        const { status, message, messages } = err;
        const totalMessages = messages.length;

        expect(status).toBe(400);
        expect(message).toBe('Bad Request');
        expect(totalMessages).toBe(2);

        const [firstMessage, secondMessage] = messages;
        expect(firstMessage.mensagem).toBe('Message 1');
        expect(firstMessage.codigo).toBe(400);
        expect(secondMessage.mensagem).toBe('Message 2');
        expect(secondMessage.codigo).toBe(400);

        done();
    });

    it('should return list of 1 createError', async done => {
        const err = httpErrors.createError(400, 'Message 1');

        const { status, message, messages } = err;
        const totalMessages = messages.length;

        expect(status).toBe(400);
        expect(message).toBe('Bad Request');
        expect(totalMessages).toBe(1);

        const [firstMessage] = messages;
        expect(firstMessage.mensagem).toBe('Message 1');
        expect(firstMessage.codigo).toBe(400);

        done();
    });

    it('should return list of empty createErrors', async done => {
        const err = httpErrors.createErrors(400);
        const { status, message, messages } = err;
        const totalMessages = messages.length;

        expect(status).toBe(400);
        expect(message).toBe('Bad Request');
        expect(totalMessages).toBe(0);

        const [firstMessage] = messages;
        expect(firstMessage).toBeUndefined();

        done();
    });

    it('should return list of empty createError', async done => {
        const err = httpErrors.createError(400);
        const { status, message, messages } = err;
        const totalMessages = messages.length;

        expect(status).toBe(400);
        expect(message).toBe('Bad Request');
        expect(totalMessages).toBe(0);

        const [firstMessage] = messages;
        expect(firstMessage).toBeUndefined();

        done();
    });
});
