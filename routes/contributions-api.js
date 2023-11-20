const express = require('express');
const router  = express.Router();

// Create new database entry for new contribution, then redirect to story page
router.post('/', (req, res) => {});

// Adjust vote count in database for contribution with matching id
router.patch('/:id/like', (req, res) => {});

// Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'
router.patch('/:id/accept', (req, res) => {});

module.exports = router;
