const PrismaClient = require('@prisma/client').PrismaClient

const client = new PrismaClient({
    errorFormat: 'pretty',
    log: ['query', 'info'],
});

const initDb = async () => {
    const result = await client.$queryRaw `SELECT 1=1 AS "database ready";`;
    return result[0];
};

module.exports = {
    prisma: client,
    initDb: initDb
}