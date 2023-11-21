const express = require('express');
const router  = express.Router();
const { addContribution } = require("../db/stories/contributions");

// Create new database entry for new contribution, then redirect to story page
router.post('/:id', (req, res) => {
  const id = req.params.id;
  addContribution(req.session , req.body, id)
  .then(function(data){
    res.redirect(`/stories/${id}`);
  })
});

// Adjust vote count in database for contribution with matching id
router.patch('/:id/like', (req, res) => {});

// Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'
router.patch('/:id/accept', (req, res) => {});

module.exports = router;
