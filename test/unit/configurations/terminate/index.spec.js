const terminate = require('../../../../src/configurations/terminate');

describe('terminate tests', () => {
    it('should shutdown graceful', async done => {
        const close = jest.fn();
        const server = jest.fn({
            close,
        });
        terminate(server);

        process.once('SIGTERM', () => {
            expect(close).toHaveBeenCalledTimes(1);
        });

        process.once('SIGINT', () => {
            expect(close).toHaveBeenCalledTimes(1);
        });

        done();
    });
});
