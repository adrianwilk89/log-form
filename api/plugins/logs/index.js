const Joi = require('joi');
const logParser = require('./parser/logParser');
const Prisma = require('@prisma/client').Prisma

const LogsPlugin = {
    multiple: false,
    name: 'LogsPlugin',
    version: '1.0.0',
    register(server, _options) {
        server.route({
            method: 'POST',
            path: '/',
            handler: async (request, h) => {
                const {
                    payload
                } = request

                const logs = [];

                payload?.log?.split('\n')?.forEach(l => {
                    const parsedLog = logParser(l);

                    if (typeof parsedLog === 'object') {
                        logs.push(parsedLog)
                    }
                })

                const extendedByNameAndEmailLogs = logs.map((log) => {
                    return {
                        ...log,
                        name: payload.name,
                        email: payload.email,
                        severity: Number(log.severity),
                    }
                })

                try {
                    await request.server.app.db.log.createMany({
                        data: extendedByNameAndEmailLogs
                    })

                } catch (error) {
                    if(error instanceof Prisma.PrismaClientKnownRequestError) {
                    // do something..
                    }
                }
                let response;

                try {
                    response = await request.server.app.db.log.findMany({
                        where: {
                            severity: {
                                gt: 50
                            }
                        }
                    })
                } catch (error) {
                    if (error instanceof Prisma.PrismaClientKnownRequestError) {
                        // do something..
                    }
                }

                return response

            },
            options: {
                validate: {
                    payload: Joi.object({
                        email: Joi.string().email().required(),
                        name: Joi.string().required(),
                        log: Joi.string().required(),
                    }),
                },
            },
        });
    },
};

module.exports = LogsPlugin;