'strict mode';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.json')[env];
const options = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect,
    storage: config.storage,
    logging: env === 'development' // логгирование только для разработки
});
const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};
var models = [
    require('./measure'),
    require('./sensor')
];
models.forEach(model => {
    db[model.modelId] = sequelize.define(model.modelId, model.schema, model.options || {});
});
models.forEach(model => {
    if (model.associate) {
        model.associate(db);
    }
});
module.exports = db;