const express = require('express');
const router  = express.Router();

// Create new database entry for new story, and redirect to '/stories/:id'
router.post('/new', (req, res) => {});

// Mark story with matching id complete in database
router.post('/:id/complete', (req, res) => {});

module.exports = router;
