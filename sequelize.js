const { Sequelize } = require('sequelize')
const UserModel = require('./model/user')

const sequelize = new Sequelize('user_test', 'root', 'carmelo858', {
    host: 'localhost',
    dialect: 'mysql'
});
const User = UserModel(sequelize, Sequelize)

module.exports = User