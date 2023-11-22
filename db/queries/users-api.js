const { db } = require('../connection');

const createUser = (email, name, password) => {
  return db
  .query(`
    INSERT INTO users (email, name, password)
    VALUES($1, $2, $3)
    RETURNING id, email, name
  `, [email, name, password])
  .then(result => {
    return result.rows[0];
  })
  .catch(err => {
    console.log('Error:', err);
  });
};



module.exports = { createUser };
