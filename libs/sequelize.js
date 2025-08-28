const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//const URI =`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
const URI =`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true
});

setupModels(sequelize); //ejecutamos nuestro modelo
sequelize.sync(); // sincronizamos para crear las tablas

module.exports = sequelize;
