const express = require('express');
const router  = express.Router();

// Redirect to index page '/'
router.get('/', (req, res) => {});

// Render story page for story with matching id
router.get('/:id', (req, res) => {});

// Render create new story page
router.get('/new', (req, res) => {});

module.exports = router;
