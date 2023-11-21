const {pool} = require('../connection')

const getAllStories = function() {
  return pool
    .query(`SELECT * FROM stories JOIN users ON author_id = users.id;`)
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getAllStories }