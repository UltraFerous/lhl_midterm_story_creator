const {pool} = require('../connection')

const getSingleStory = function(user) {
  return pool
    .query(`SELECT * FROM stories JOIN users ON author_id = users.id WHERE users.id = ${user};`)
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getSingleStory }