const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Authors = sequelize.define('books_author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    birth_year: { type: Sequelize.SMALLINT, allowNull: true },
    death_year: { type: Sequelize.SMALLINT, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Authors;