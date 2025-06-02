import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.HOST || 'localhost:3306',
  user: 'beta_fics_usr',
  password: 'amfbBKw@r12m1*Qe',
  database: 'beta_FICS', 
  port: 3306,
});
