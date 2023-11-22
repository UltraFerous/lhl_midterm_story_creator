const { db } = require('../connection');

// Query contributions, users, votes tables
// Get contribution id, body, accepted status
// Get user name and vote count per contribution
const contributionData = function(story) {
  return db
    .query(`
    SELECT
      contributions.id,
      contributions.body,
      contributions.accepted,
      users.name,
      COUNT(votes.contribution_id) AS vote_count
    FROM contributions
    JOIN users ON contributions.author_id = users.id
    LEFT JOIN votes ON contributions.id = votes.contribution_id
    WHERE contributions.story_id = $1
    GROUP BY
      contributions.id,
      contributions.body,
      contributions.accepted,
      users.name;
    `, [story])
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