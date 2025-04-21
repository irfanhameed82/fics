import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'abc.123',
  database: 'fics',
  port: 3306,
});
