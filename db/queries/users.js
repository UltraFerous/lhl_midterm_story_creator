const db = require('../connection');

// Get all users from database
const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// Get one user based on id/name/email
const getIndividualUser = (attribute, value) => {
  const allowedAttributes = ['id', 'name', 'email'];
  // if attribute argument is none of the allowed, throw error
  if (!allowedAttributes.includes(attribute)) {
    throw new Error('Invalid attribute');
  }

  return db.query(`
    SELECT * from users
    WHERE ${attribute} = $1
  `, [value])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers, getIndividualUser };
