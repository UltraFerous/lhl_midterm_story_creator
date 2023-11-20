const {pool} = require('../connection')

const getSingleStoryData = function(storyID) {
  // console.log("OKAY HERE IS DATA FOR USER", storyID);
  return pool
    .query(`SELECT title, name, body FROM stories JOIN users ON author_id = users.id WHERE stories.id = ${Number(storyID)};`)
    .then((result) => {
      return result.rows[0]
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getSingleStoryData }