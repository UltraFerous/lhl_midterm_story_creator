const {pool} = require('../connection')

const getAllStories = function() {
  console.log("xyz");
  return pool
    .query(`SELECT * FROM stories;`)
    .then((result) => {
      console.log(result.rows);
      return result.rows
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};
const test = function() {
  return {name: "abc"}
}

module.exports = { getAllStories, pool, test }