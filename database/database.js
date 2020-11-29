const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'pedro007',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;