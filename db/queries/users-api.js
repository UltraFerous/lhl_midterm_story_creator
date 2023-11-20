const db = require('../connection');

const createUser = (email, name, password) => {
  return db
  .query(`
    INSERT INTO users (email, name, password)
    VALUES($1, $2, $3)
  `, [email, name, password])
  .then(data => {
    return data;
  })
  .catch(err => {
    console.log(err);
  });
};



module.exports = { createUser };
