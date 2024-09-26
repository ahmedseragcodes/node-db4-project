const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
},
migrations: {
  directory: "./data/migrations"
},
seeds: {
  directory: "./data/seeds"
}
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: "./data/menu.db3"
  },
  production: {
    ...sharedConfig,
    connection: "./data/menuProduction.db3"
  }
};
