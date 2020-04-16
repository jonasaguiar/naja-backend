require("dotenv/config");

module.exports = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PSSWRD_DEV,
    database: process.env.DB_DBNAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: "postgres",
    define: {
      timestamps: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
};
