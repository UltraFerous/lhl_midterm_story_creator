const {pool} = require('../connection')

const getAllStories = function() {
  console.log("xyz");
  return pool
    .query(`SELECT * FROM stories;`)
    .then((result) => {
      return result.rows
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getAllStories }