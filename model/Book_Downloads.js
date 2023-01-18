const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Book_Downloads = sequelize.define('books_format', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mime_type: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    book_id: { type: Sequelize.INTEGER, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Book_Downloads;