const { pool } = require('../connection');

const contributionData = function(story) {
  return pool
    .query(`SELECT contributions.body, users.name, contributions.accepted FROM contributions JOIN users ON contributions.story_id = users.id WHERE contributions.story_id = $1`, [story])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { contributionData };