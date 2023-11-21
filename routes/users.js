/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Render registration page
router.get('/register', (req, res) => {
  res.render('register', {...res.locals});
});

// Render login page
router.get('/login', (req, res) => {
  res.render('login', {...res.locals});
});

module.exports = router;
