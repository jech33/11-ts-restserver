import { Sequelize } from "sequelize";


const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    omitNull: false,
    // logging: false,
});

export default db;