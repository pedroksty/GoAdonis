"use strict";

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use("Env");

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use("Helpers");

module.exports = {
  connection: Env.get("DB_CONNECTION", "sqlite"),

  sqlite: {
    client: "sqlite3",
    connection: {
      filename: Helpers.databasePath(
        `${Env.get("DB_DATABASE", "development")}.sqlite`
      ),
    },
    useNullAsDefault: true,
    debug: Env.get("DB_DEBUG", false),
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: "mysql",
    connection: {
      host: Env.get("DB_HOST", "localhost"),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", "root"),
      password: Env.get("DB_PASSWORD", ""),
      database: Env.get("DB_DATABASE", "adonis"),
    },
    debug: Env.get("DB_DEBUG", false),
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: "pg",
    connection: {
      host: Env.get("DB_HOST", "localhost"),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", "root"),
      password: Env.get("DB_PASSWORD", ""),
      database: Env.get("DB_DATABASE", "adonis"),
    },
    debug: Env.get("DB_DEBUG", false),
  },
};
