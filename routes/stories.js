const express = require('express');
const router = express.Router();
const { getAllStories, test } = require("../db/stories/stories");

// Redirect to index page '/'
router.get('/', (req, res) => {
  console.log("12345");
  getAllStories()
  .then(function(data){
    console.log(data);
    res.send(data);
  }
  );
});

// Render create new story page
router.get('/new', (req, res) => { });

// Render story page for story with matching id
router.get('/:id', (req, res) => { });

module.exports = router;
