const request = require('supertest');

const app = require('../../../../src/configurations/app');

describe('simple test', () => {
    it('should do something', async done => {
        const { status, body } = await request(app).get('/api/v1/hello');

        const { title, message } = body;

        expect(status).toBe(200);
        expect(title).toBe('hello');
        expect(message).toBe('hello node-essential');

        done();
    });
});
