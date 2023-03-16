const init = require('../../../server').init

describe('logsPlugin', () => {
    let server;

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    test('should create 2 records when 2 logs are provided', async () => {

        const mockDb = {
            log: {
                createMany: jest.fn(() => Promise.resolve(null)),
                findMany: jest.fn(() => Promise.resolve(null))
            }
        }

        server.app.db = mockDb;

        await server.inject({
            method: 'post',
            url: '/logs',
            payload: {
                name: 'Adrian',
                email: 'adrianwilk89@op.pl',
                log: 'E 1 1 test\nI 1 2 test\n'
            }
        });
        expect(mockDb.log.createMany.mock.calls[0][0].data.length).toEqual(2);
        expect(mockDb.log.createMany.mock.calls[0][0]).toEqual({
            data: [{
                email: "adrianwilk89@op.pl",
                message: "test",
                name: "Adrian",
                severity: 1,
                timestamp: "1",
                type: "E"
            }, {
                email: "adrianwilk89@op.pl",
                message: "test",
                name: "Adrian",
                severity: 1,
                timestamp: "2",
                type: "I"
            }]
        })
    })
})