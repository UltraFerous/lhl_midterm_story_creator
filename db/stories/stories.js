const { pool } = require('../connection');

const getAllStories = function() {
  return pool
    .query(`SELECT stories.id, stories.title, users.name, stories.body, stories.status FROM stories JOIN users ON author_id = users.id`)
    .then((result) => {
      console.log("GET ALL STORIES", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

const getSingleStory = function(story) {
  return pool
    .query(`SELECT stories.id, stories.title, users.name, stories.body, stories.status FROM stories JOIN users ON author_id = users.id WHERE stories.id = $1`, [story])
    .then((result) => {
      console.log("ERROR HERE:", result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

const postNewStory = function(userData, postData) {
  let Title = postData.newTitle;
  let Story = postData.newBody;
  let user = userData.id;
  let input = [Title, Story, user];

  return pool
    .query(`INSERT INTO stories (title, body, author_id) VALUES ($1, $2, $3) RETURNING id;`, input)
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};

module.exports = { getAllStories, getSingleStory, postNewStory };