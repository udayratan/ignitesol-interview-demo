const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'ignitesol',
    'uday',
    'uday1234',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: false
        }
    }
);
(async function () {
    try {
        await sequelize.authenticate();
        console.log('DB Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}());

module.exports = sequelize;