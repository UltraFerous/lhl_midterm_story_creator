const express = require('express');
const router = express.Router();
const { addVote } = require('../db/queries/votes-api');
const { getSingleStoryFromContribution } = require('../db/queries/stories.js');


// Add a vote in votes table for contribution with matching id
router.post('/:id/like', (req, res) => {
  const contributionId = req.params.id;
  const { authorId } = req.body;

  addVote(authorId, contributionId)
    .then(function(){
      getSingleStoryFromContribution(contributionId)
      .then(function(returnID){
        console.log("RETURN TO", returnID);
        return res.redirect(`/`);
      })
    })
    .catch(error => {
      console.log('Error:', error);
    });
});

module.exports = router;
