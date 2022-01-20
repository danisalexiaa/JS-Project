const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite/users.db"
});

// sequelize.sync({ force: true }).then(() => {
//     console.log("Modele sincronizate cu succes");
// })
module.exports = sequelize;