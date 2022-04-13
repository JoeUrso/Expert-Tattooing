// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "rootroot",
            database: "expert_tattooing",
            charset: "utf8",
        },
    },
    migrations: {
        directory: "./server/migrations",
        extension: "ts",
    },
};
