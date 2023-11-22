const { db } = require('../connection');

const contributionData = function(story) {
  return db
    .query(`SELECT contributions.body, users.name, contributions.accepted FROM contributions JOIN users ON contributions.author_id = users.id WHERE contributions.story_id = $1`, [story])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

const addContribution = function(userData, postData, storyID) {
  let contribution = postData.newContribution;
  let user = userData.id;
  let input = [contribution, user, storyID];

  return db
    .query(`INSERT INTO contributions (body, author_id, story_id) VALUES ($1, $2, $3)`, input)
    .then((result) => {
      return
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { contributionData, addContribution };