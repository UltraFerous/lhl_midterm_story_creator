/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require("bcryptjs");
const { createUser } = require('../db/queries/users-api');
const { getIndividualUser } = require('../db/queries/users');

// Register new user in database and redirect to home page
router.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  createUser(req.body.email, req.body.name, hash)
    .then((newUser) => {
      req.session.id = newUser.id;
      req.session.name = newUser.name;
      req.session.email = newUser.email;
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

// Authenticate user login and redirect to home page
router.post('/login', (req, res) => {
  getIndividualUser('email', req.body.email)
    .then(response => {
      if (bcrypt.compareSync(req.body.password, response[0].password)) {
        req.session.id = response[0].id;
        req.session.name = response[0].name;
        req.session.email = response[0].email;
        res.redirect('/');
      } else {
        res.render('login', {userData: null, errorMessage: 'Wrong password. Please try again.'});
      }
    })
    .catch(() => {
      res.render('login', {userData: null, errorMessage: 'Wrong email address. Please try again.'});
    });
});

// Log out authenticated user and redirect to homage page
router.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
