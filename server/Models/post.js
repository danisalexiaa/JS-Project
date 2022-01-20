const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
// Definire model pentru postare
const Post = sequelize.define(
    "Post",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: DataTypes.STRING,
        product: DataTypes.STRING,
        category: DataTypes.STRING,
        expirationDate: DataTypes.STRING
    },
    {tableName: "Posts"}
);

module.exports = Post;