const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Books = sequelize.define('books_book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    download_count: { type: Sequelize.INTEGER, allowNull: true },
    gutenberg_id: { type: Sequelize.INTEGER, allowNull: false },
    media_type: { type: Sequelize.STRING, allowNull: true },
    title: { type: Sequelize.STRING, allowNull: true },
}, {
    freezeTableName: true
});
module.exports = Books;