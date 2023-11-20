/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { createUser } = require('../db/queries/users-api');
const bcrypt = require("bcryptjs");

// Register new user in database and redirect to home page
router.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  createUser(req.body.email, req.body.name, hash)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    })
});

// Authenticate user login and redirect to home page
router.post('/login', (req, res) => {
  //
});

// Log out authenticated user and redirect to homage page
router.delete('/login', (req, res) => {});

module.exports = router;
