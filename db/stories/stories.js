const {pool} = require('../connection')

const getAllStories = function() {
  return pool
    .query(`SELECT * FROM stories JOIN users ON author_id = users.id`)
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

const getSingleStory = function(user) {
  return pool
    .query(`SELECT * FROM stories JOIN users ON author_id = users.id WHERE users.id = $1`, [user])
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getAllStories, getSingleStory }