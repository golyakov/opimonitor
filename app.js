'use strict';

const measureService = require('./services/measureService');
const storeService = require('./services/storeService');
const remoteStoreService = require('./services/remoteStoreService');

const config = require('./config/config.json')[process.env.NODE_ENV];
const period = (parseInt(config.period || process.env.PERIOD) || 1) * 60 * 1000; // In minutes
const saveInDb = (config.saveInDb || process.env.SAVE_IN_DB) == "true";

class App {
    run() {
        this.tick()
        const timer = setInterval(() => this.tick(), period);
    }

    tick() {
        const value = measureService.measure() || 0;

        // Save in database
        if (saveInDb) {
            storeService
                .create({ value })
                .catch(err => console.error(err));
        }

        // send to remote service
        remoteStoreService
            .create(value)
            .catch(err => console.error(err));
    }
}

const app = new App();
app.run();

module.exports = app;