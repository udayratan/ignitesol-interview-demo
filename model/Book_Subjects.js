const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Book_Subjects = sequelize.define('books_book_subjects', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_id: { type: Sequelize.INTEGER, allowNull: false },
    subject_id: { type: Sequelize.INTEGER, allowNull: false },
}, {
    freezeTableName: true
});
module.exports = Book_Subjects;