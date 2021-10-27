const database = require('./modules/database');
const config = require('./config');

(async () => {
    console.info('Starting the app...');
    console.info('Connecting to the DB...');
    await database.connect();
    console.info(("Connected to the DB."));

    console.info('Creating the express app...');
    const express = require('express');
    const app = express();

    console.info('Starting the app...');
    app.listen(config.app.port, () => {
        console.info(`Server is listening on port ${config.app.port}...`)
    })
})();