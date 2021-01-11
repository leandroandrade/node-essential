const request = require('supertest');

const app = require('../../../../src/configurations/app');

describe('simple error test', () => {
    it('should return error', async done => {
        const { status, body } = await request(app).get('/api/v1/error');

        expect(status).toBe(400);

        const { messages } = body;
        expect(messages.length).toBe(1);

        const [data] = messages;
        const { code, message } = data;
        expect(code).toBe(400);
        expect(message).toBe('This is a simple error example!');

        done();
    });
});
