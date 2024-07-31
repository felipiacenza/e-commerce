const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    }
});

module.exports = Product;
