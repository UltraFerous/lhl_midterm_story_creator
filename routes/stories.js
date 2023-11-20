const express = require('express');
const router = express.Router();
const { getAllStories } = require("../db/stories/homepageStories");
const { getSingleStoryData } = require("../db/stories/singleStorySearch");

// Render story page for story with matching id
router.get('/:id', (req, res) => { 
  getSingleStoryData(req.params.id)
  .then(function(dataPoint) {
    console.log(dataPoint);
    const templateVars = {
      story: dataPoint
    };
    return res.render('story', templateVars);
  }).catch(function(err){
    console.log("Single Story Error:", err);
  })
});

// Redirect to index page '/'
router.get('/', (req, res) => {
  getAllStories()
  .then(function(storyData) {
    const templateVars = {
      story: storyData
    };
    return res.render('index', templateVars);
  }).catch(function(err){
    console.log("Homepage Error:", err);
  })
});

// Render create new story page
router.get('/new', (req, res) => { });


module.exports = router;
