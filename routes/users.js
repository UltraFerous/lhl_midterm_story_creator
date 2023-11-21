/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// probably don't need this route, or it should redirect to a user's profile page
router.get('/', (req, res) => {
  res.render('users');
});

// Render registration page
router.get('/register', (req, res) => {
  res.render('register');
});

// Render login page
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
