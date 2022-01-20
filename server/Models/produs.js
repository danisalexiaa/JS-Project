const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Produs = sequelize.define(
    "Produs", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        denumire: DataTypes.STRING,
        category: DataTypes.STRING,
        expirationDate: DataTypes.STRING,
        type: DataTypes.STRING
    }, { tableName: "Produse" }
);

module.exports = Produs;