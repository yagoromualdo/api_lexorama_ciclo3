const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lexorama', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;