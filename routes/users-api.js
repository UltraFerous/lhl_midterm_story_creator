/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// Register new user in database and redirect to home page
router.post('/register', (req, res) => {});

// Authenticate user login and redirect to home page
router.post('/login', (req, res) => {});

// Log out authenticated user and redirect to homage page
router.delete('/login', (req, res) => {});

module.exports = router;
