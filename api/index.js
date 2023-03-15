const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const LogsPlugin = require('./plugins/logs');
const {
    initDb,
    prisma
} = require('./db');

const init = async () => {

    await initDb();

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });
    server.app.db = prisma;
    server.validator(Joi);

    await server.register({
        plugin: LogsPlugin,
    }, {
        routes: {
            prefix: '/logs',
        },
    });
   
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();