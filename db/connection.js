// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
}

const db = new Pool(dbParams);

db.connect();

module.exports = {db};
