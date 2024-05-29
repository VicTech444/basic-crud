import mysql from 'mysql2/promise.js'
import 'dotenv/config'

let default_config = {
    host : process.env.DB_HOST,
    port : 3306,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
}

export const db = await mysql.createConnection(default_config);
await db.query(`USE ${process.env.DB_NAME}`)