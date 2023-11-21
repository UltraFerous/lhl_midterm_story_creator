const express = require('express');
const router = express.Router();
const { getAllStories } = require("../db/stories/stories");
const { getSingleStory } = require("../db/stories/singleStory");

// Render story page for story with matching id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log("ID IS", id);
  getSingleStory(id)
    .then(function(storyData) {
      const templateVars = {
        storyData: storyData
      }
      res.render('storyPage', templateVars);
    });
});

// Redirect to index page '/'
router.get('/', (req, res) => {
  getAllStories()
    .then(function(data) {
      return res.send(data);
    }
    );
});


// Render create new story page
router.get('/new', (req, res) => { });


module.exports = router;
