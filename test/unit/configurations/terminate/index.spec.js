const exit = require('../../../../src/configurations/exit');

describe('exit tests', () => {
    beforeEach(() => {
        process.removeAllListeners();
    });

    afterAll(() => {
        process.removeAllListeners();
    });

    it('should shutdown graceful SIGTERM', async done => {
        const close = jest.fn().mockImplementation(cb => cb());
        const server = {
            close,
        };
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(number => number);
        exit(server);

        process.emit('SIGTERM');

        expect(close).toHaveBeenCalledTimes(1);
        expect(mockExit).toHaveBeenCalledTimes(1);

        done();
    });

    it('should shutdown graceful SIGINT', async done => {
        const close = jest.fn().mockImplementation(cb => cb());
        const server = {
            close,
        };
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(number => number);
        exit(server);

        process.emit('SIGINT');

        expect(close).toHaveBeenCalledTimes(1);
        expect(mockExit).toHaveBeenCalledTimes(1);

        done();
    });
});
