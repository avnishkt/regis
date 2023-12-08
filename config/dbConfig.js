module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'db@7890an',
    DB: 'register',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}