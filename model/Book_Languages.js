const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Book_Languages = sequelize.define('books_book_languages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_id: { type: Sequelize.INTEGER, allowNull: false },
    language_id: { type: Sequelize.INTEGER, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Book_Languages;