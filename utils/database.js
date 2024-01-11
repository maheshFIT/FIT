const { Sequelize } = require('sequelize')

const connection = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: "localhost" || "156.67.210.236",
    port: "3306",
    dialect: "mysql",
    logging: false
});

console.log("successfully connected to database");

module.exports = connection;