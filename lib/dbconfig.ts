import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'beta_fics_usr',
  password: 'amfbBKw@r12m1*Qe',
  database: 'beta_FICS', 
  port: 3306,
});
