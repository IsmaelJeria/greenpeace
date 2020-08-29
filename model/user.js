const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('users_table', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: Sequelize.STRING,
        password: Sequelize.STRING,
    })
}