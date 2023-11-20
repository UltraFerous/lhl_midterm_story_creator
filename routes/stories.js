const express = require('express');
const router  = express.Router();
const { getAllStories } = require("../public/scripts/indexdb.js")


// Redirect to index page '/'
router.get('/', (req, res) => {
  res.send(getAllStories());
});

// Render create new story page
router.get('/new', (req, res) => {});

// Render story page for story with matching id
router.get('/:id', (req, res) => {});

module.exports = router;
