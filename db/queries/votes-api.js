const { db } = require('../connection');

const addVote = function(authorId, contributionId) {
  return db
    .query(`
      INSERT INTO votes (author_id, contribution_id)
      VALUES ($1, $2)
    `, [authorId, contributionId])
    .then()
    .catch(err => console.log("ERROR:", err.message));
};

module.exports = { addVote };
