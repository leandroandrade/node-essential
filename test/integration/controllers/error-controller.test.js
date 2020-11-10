const request = require('supertest');

const app = require('../../../src/app');

describe('simple error test', () => {
    it('should return error', async done => {
        const { status, body } = await request(app).get('/api/v1/error');

        expect(status).toBe(400);

        const { mensagens } = body;
        expect(mensagens.length).toBe(1);

        const [mensagem] = mensagens;
        const { codigo, mensagem: detalhe } = mensagem;
        expect(codigo).toBe(400);
        expect(detalhe).toBe('This is a simple error example!');

        done();
    });
});
