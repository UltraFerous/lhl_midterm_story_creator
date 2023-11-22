const express = require('express');
const router = express.Router();
const { addVote, deleteVote } = require('../db/queries/votes-api');

// Add a vote in votes table for contribution with matching id
router.post('/:id/like', (req, res) => {
  const contributionId = req.params.id;
  const { authorId } = req.body;

  addVote(authorId, contributionId)
    .then()
    .catch(error => {
      console.log('Error:', error);
    });
});

module.exports = router;
