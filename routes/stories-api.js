const express = require('express');
const router  = express.Router();
const { postNewStory } = require("../db/stories/stories");


// Create new database entry for new story, and redirect to '/stories/:id'
router.post('/', (req, res) => {
  let newID;
  postNewStory(req.session , req.body)
  .then(function(data){
    newID = data.id;
    console.log(newID);
    res.redirect(`/stories/${newID}`, );
  })
});

// Mark story with matching id complete in database
router.patch('/:id/complete', (req, res) => {});

module.exports = router;
