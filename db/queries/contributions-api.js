const { db } = require('../connection');

// Add a new contribution to the contributions table
const addContribution = function(userData, postData, storyID) {
  let contribution = postData.newContribution;
  let user = userData.id;
  let input = [contribution, user, storyID];

  return db
    .query(`INSERT INTO contributions (body, author_id, story_id) VALUES ($1, $2, $3)`, input)
    .then((result) => {
      return
    })
    .catch((error) => {
      console.log('ERROR:', error.message);
    });
};

// Accept an individual contribution and add it to an existing story
// Update accepted column in contributions table
const acceptContribution = function(storyId, contributionId, contributionBody) {
  return db
    .query(`
        UPDATE contributions
        SET accepted = true, Timestamp = CURRENT_TIMESTAMP
        WHERE id = $1
      `, [contributionId])
      .then(() => {
        return db.query(`
          UPDATE stories
          SET body = CONCAT(body, E'\\n', E'\\n', $1::text)
          WHERE id = $2
        `, [contributionBody, storyId]);
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
};

module.exports = { addContribution, acceptContribution };
