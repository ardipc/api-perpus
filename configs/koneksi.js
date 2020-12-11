var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
  connectionLimit: 5,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'api_perpus',
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection) {
    console.log('database connected');
    connection.release();
  }
  return;
});

pool.query = util.promisify(pool.query);
module.exports = pool;
