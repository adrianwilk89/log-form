const Joi = require('joi');

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

                 const logs = []

                 payload ?.log ?.split('\n')?.forEach(l => {
                     try {
                         const parser = new RegExp(/(?<type>E|I|W)\s(?<severity>[0-9]{0,5})\s?(?<timestamp>[0-9]{0,5})\s?(?<message>.*)/)
                         logs.push(parser.exec(l).groups)
                     } catch (e) {
                         // do something..
                     }
                 })

                 const extendedLogs = logs.map((log) => {
                     return {
                         ...log,
                         name: payload.name,
                         email: payload.email,
                         severity: Number(log.severity),

                     }
                 })

                 try {
                     await request.server.app.db.log.createMany({
                         data: extendedLogs
                     })

                 } catch (error) {
                     // do something..
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
                     // do something..
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