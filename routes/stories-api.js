const express = require('express');
const router = express.Router();
const { postNewStory } = require('../db/queries/stories');
const { completeStory } = require('../db/queries/stories-api');


// Create new database entry for new story, and redirect to '/stories/:id'
router.post('/', (req, res) => {
  let newID;

  if (req.body.newTitle === "" || req.body.newBody === "") {
    res.redirect('/stories/new');
  }

  postNewStory(req.session, req.body)
    .then(function(data) {
      newID = data.id;
      res.redirect(`/stories/${newID}`);
    });
});

// Mark story with matching id complete in database
router.patch('/:id/complete', (req, res) => {
  const { id } = req.params;

  completeStory(id)
  .then(() => {
    const responseData = {
      success: true,
      message: 'Operation completed successfully',
    };
    res.json(responseData);
  })
  .catch(error => {
    console.log('Error:', error);
  });
});

module.exports = router;
