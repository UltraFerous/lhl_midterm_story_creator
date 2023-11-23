const { db } = require('../connection');

const getAllStories = function() {
  return db
    .query(`
    SELECT
      stories.id,
      stories.title,
      users.name,
      stories.body,
      stories.status
    FROM stories
    JOIN users ON author_id = users.id
    ORDER BY stories.id DESC`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log("ERROR:", error.message);
    });
};

const getSingleStory = function(story) {
  return db
    .query(`
      SELECT
        stories.id,
        stories.title,
        users.id as user_id,
        users.name,
        stories.body,
        stories.status
      FROM stories
      JOIN users ON author_id = users.id
      WHERE stories.id = $1
    `, [story])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.log("ERROR:", error.message);
    });
};

const postNewStory = function(userData, postData) {
  let Title = postData.newTitle;
  let Story = postData.newBody;
  let user = userData.id;
  let input = [Title, Story, user];

  return db
    .query(`INSERT INTO stories (title, body, author_id) VALUES ($1, $2, $3) RETURNING id;`, input)
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.log("ERROR:", error.message);
    });
};

const getSingleStoryFromContribution = function(contributionID) {
  return db
    .query(`
    SELECT
    stories.id
    FROM stories
    JOIN contributions ON contributions.story_id = stories.id
    WHERE contributions.id = $1;
    `, [contributionID])
    .then((result) => {
      console.log('RESULT', result.rows[0].id);
      return result.rows[0].id;
    })
    .catch((error) => {
      console.log("ERROR:", error.message);
    });
};

module.exports = { getAllStories, getSingleStory, postNewStory, getSingleStoryFromContribution };
