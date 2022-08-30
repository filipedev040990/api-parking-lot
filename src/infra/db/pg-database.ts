import pgPromise from "pg-promise";

const pgp = pgPromise({})

const dbPg = pgp({
    user: 'postgres',
    password: '05Ad00sp*',
    host: 'localhost',
    port: 5432,
    database: 'parking_lot',
    idleTimeoutMillis: 100
})

export { dbPg }