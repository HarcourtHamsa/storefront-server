import { Sequelize } from "sequelize"

const env = process.env.NODE_ENV || 'development'

export const config = {
    development: {
        username: "root",
        user: "root",
        password: "root",
        database: "storefront_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: "root",
        user: "root",
        password: "root",
        database: "storefront_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: "root",
        user: "root",
        password: "root",
        database: "storefront",
        host: "127.0.0.1",
        dialect: "mysql"
    }
}

const sequelize = new Sequelize(config[env])


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})

export default sequelize