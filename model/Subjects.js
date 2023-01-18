const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Subjects = sequelize.define('books_subject', {
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
module.exports = Subjects;