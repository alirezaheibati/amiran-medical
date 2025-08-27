import mysql from "mysql2/promise";
import dotenv from "dotenv";

/**
 * Loads environment variables from a `.env` file into `process.env`.
 * Ensures database credentials are available for connection.
 */
dotenv.config();

/**
 * Creates a MySQL connection pool using credentials from environment variables.
 *
 * @constant pool
 * @type {mysql.Pool}
 * @property {string} host - The hostname of the database server.
 * @property {string} user - The MySQL user name.
 * @property {string} password - The password for the MySQL user.
 * @property {string} database - The name of the MySQL database.
 * @property {boolean} waitForConnections - Determines if the pool should wait for connections.
 * @property {number} connectionLimit - The maximum number of connections allowed.
 * @property {number} queueLimit - The maximum number of connection requests in the queue. 0 = unlimited.
 */
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Establishes a MySQL database connection using environment variables.
 *
 * @returns A promise that resolves to the MySQL connection instance.
 */
import { drizzle } from "drizzle-orm/mysql2";
const connection = await mysql.createConnection({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
});
/**
 * Initializes the Drizzle ORM with the established MySQL connection.
 */
export const db = drizzle(connection);
