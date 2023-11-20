const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lightbnb'
});

const getAllStories = function() {
  pool
    .query(`SELECT * FROM stories`)
    .then((result) => {
      console.log(result.rows);
      return result.rows
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getAllStories }