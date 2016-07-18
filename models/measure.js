'use strict';

const sequelize = require('sequelize');

const model = {
    modelId: 'Measure',
    schema: {
        id: { type: sequelize.INTEGER, unique: true, primaryKey: true, autoIncrement: true },
        value: { type: sequelize.FLOAT, allowNull: false }
    },
    associate: (models) => {
        //models[model.modelId].belongsTo(models['Sensor']); // sensor
    },
    options: {

    }
};
module.exports = model;