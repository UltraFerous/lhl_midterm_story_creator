const { db } = require('../connection');

const completeStory = function(storyId) {
  return db.query(`
    UPDATE stories
    SET status = false
    WHERE id = $1
  `, [storyId])
  .catch(err => {
    console.log('Error:', err);
  });
};

module.exports = { completeStory };
