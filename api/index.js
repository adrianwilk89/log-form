const start = require('./server').start

start();

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
