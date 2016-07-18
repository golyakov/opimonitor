'use strict';

const rp = require('request-promise');

const config = require('./../config/config.json')[process.env.NODE_ENV];
const apiKey = process.env.THINGSPEAK_API_KEY || config.thingSpeakApiKey;
/**
 * Сервис сохранения данных
 */
class RemoteStoreService {

    constructor(options) {
        this.url = 'https://api.thingspeak.com/update';
        this.API_KEY = options.apiKey;
    }

    /**
     * Создать
     */
    create(value) {
        const options = {
            method: 'POST',
            uri: this.url,
            form: {
                api_key: this.API_KEY,
                field1: value
            }
        }
        return rp(options);
    }
}

module.exports = new RemoteStoreService({ apiKey }); 