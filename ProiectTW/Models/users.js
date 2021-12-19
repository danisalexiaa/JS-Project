// class user{
//     constructor(id, name, product, post){
//         this.id = id;
//         this.name = name;
//         this.product = product;
//         this.post = post;
//     }
// }
// module.exports = user;

// Definire model pentru utilizator
const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {tableName: "Users"}
);

module.exports = User;