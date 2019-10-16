'use strict';

const request = require('supertest');

const app = require('../../src/app');

describe('get liturgia diaria', function () {

    it('deve retornar as liturgias', async (done) => {

        const { status, body } = await request(app)
            .get('/hello');

        const { title, message } = body;

        expect(status).toBe(200);
        expect(title).toBe('hello');
        expect(message).toBe('hello node-essential');

        done();

    });


});