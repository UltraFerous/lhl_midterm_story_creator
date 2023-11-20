const express = require('express');
const router = express.Router();
const { getAllStories } = require("../db/stories/homepageStories");

// Redirect to index page '/'
router.get('/', (req, res) => {
  getAllStories()
  .then(function(data){
    res.send(data);
  }
  );
});

// Render create new story page
router.get('/new', (req, res) => { });

// Render story page for story with matching id
router.get('/:id', (req, res) => { });

module.exports = router;
