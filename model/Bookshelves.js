const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Bookshelves = sequelize.define('books_bookshelf', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Bookshelves;