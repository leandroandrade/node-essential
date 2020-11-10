const request = require('supertest');

const app = require('../../src/app');

describe('simple error test', () => {
    it('should return error', async done => {
        const { status } = await request(app).get('/api/v1/error');

        expect(status).toBe(400);

        done();
    });
});
