const Sequelize = require('sequelize')
const sequelize = require('../config/db');

const Book_Authors = sequelize.define('books_book_authors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_id: { type: Sequelize.INTEGER, allowNull: false },
    author_id: { type: Sequelize.INTEGER, allowNull: false },
}, {
    freezeTableName: true
});

module.exports = Book_Authors;