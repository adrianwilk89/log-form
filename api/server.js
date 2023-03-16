const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const LogsPlugin = require('./plugins/logs');
const {
    initDb,
    prisma
} = require('./db');

const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
});

const registerRoutes = async () => {
    await server.register({
        plugin: LogsPlugin,
    }, {
        routes: {
            prefix: '/logs',
        },
    });
}

const init = async () => {
    await registerRoutes();
    await server.initialize();
    return server;
};

const start = async () => {
    await initDb();
    await registerRoutes();

    server.app.db = prisma;
    server.validator(Joi);




    await server.start();

    console.log('Server running on %s', server.info.uri);

    return server;
};

module.exports = {
    init,
    start
}