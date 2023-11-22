const { db } = require('../connection');

const deleteVote = function(authorId, contributionId) {
  return db
    .query(`
      DELETE  FROM votes 
      WHERE author_id = $1
      AND 
      contribution_id = $2
    `, [authorId, contributionId])
    .then()
    .catch(err => console.log("ERROR:", err.message));
};

const addVote = function(authorId, contributionId) {
  return db
    .query(`
      INSERT INTO votes (author_id, contribution_id)
      VALUES ($1, $2)
    `, [authorId, contributionId])
    .then()
    .catch(function(err){
      console.log("ERROR:", err.message)
      deleteVote(authorId, contributionId);
    })
};

const findVotes = function(userID, storyID) {
  return db
    .query(`
    SELECT
    votes.author_id,
    contributions.story_id,
    votes.contribution_id,
    votes.status 
        FROM contributions
        JOIN users ON contributions.author_id = users.id
        JOIN votes ON contributions.id = votes.contribution_id
    WHERE 
    votes.author_id = $1
    AND
    contributions.story_id = $2;
    `, [userID, storyID])
    .then( function(data)
      {
        return data.rows;
      }
    )
    .catch(err => console.log("ERROR:", err.message));
};



module.exports = { addVote, findVotes, deleteVote };
