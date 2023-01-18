const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Languages = sequelize.define('books_language', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: { type: Sequelize.STRING, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Languages;