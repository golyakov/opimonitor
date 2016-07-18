'use strict';

const models = require('./../models')
const sensorModel = require(`./../models/sensor`);
const sensor = models.sequelize.model(sensorModel.modelId);
const measureModel = require(`./../models/measure`);
const measure = models.sequelize.model(measureModel.modelId);

/**
 * Сервис сохранения данных
 */
class StoreService {
    /**
     * Создать
     */
    create(value) {
        return measure.create(value);
    }
}

module.exports = new StoreService(); 