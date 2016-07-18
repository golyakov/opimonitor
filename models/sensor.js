'use strict';

const sequelize = require('sequelize');

const measure = require('./measure');

const model = {
    modelId: 'Sensor',
    schema: {
        id: { type: sequelize.INTEGER, unique: true, primaryKey: true, autoIncrement: true },
        name: { type: sequelize.STRING, allowNull: false }
    },
    associate: (models) => {
        models[model.modelId].hasMany(models[measure.modelId]); // measures
    },
    options: {

    }
};
module.exports = model;