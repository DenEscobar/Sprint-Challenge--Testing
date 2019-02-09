// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.db'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.db'
    },
    useNullAdDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  }
  

};
