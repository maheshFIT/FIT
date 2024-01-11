const {DataTypes} = require('sequelize');

const sequelize = require('../utils/database');

const ContactUsQuerry = sequelize.define("contact_us", {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, { timestamps: true });

sequelize.sync();

module.exports = ContactUsQuerry