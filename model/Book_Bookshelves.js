const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Book_Bookshelves = sequelize.define('books_book_bookshelves', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_id: { type: Sequelize.INTEGER, allowNull: false },
    bookshelf_id: { type: Sequelize.INTEGER, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Book_Bookshelves;