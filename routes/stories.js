const express = require('express');
const router = express.Router();
const { getAllStories, getSingleStory } = require("../db/queries/stories.js");
const { loginCheck } = require('../helpers/loginCheck.js');
const { contributionData } = require("../db/queries/contributions.js");
const { findVotes } = require("../db/queries/votes-api.js");
const { openClose,  cleanData } = require("../helpers/filters.js");

// Render create new story page
router.get('/new', (req, res) => {
  loginCheck(req.session)
    .then(function(check) {
      if (check === true) {
        const templateVars = {
          userData: req.session
        };
        res.render('newStory', templateVars);
      }
      return res.redirect(`/users/login`);
    }
    );
});

// Render story page for story with matching id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  getSingleStory(id)
    .then(function(storyData) {
      let templateVars = {
        storyData: (storyData),
        userData: req.session
      };
      contributionData(id)
        .then(function(contributionDataResult) {
          templateVars['contData'] = contributionDataResult;
          console.log(contributionDataResult);
          findVotes(req.session.id, id)
          .then(function(voteData) {
            templateVars['voteData'] = voteData;
            console.log(voteData);
            res.render('storyPage', templateVars);
          })
        });
    });
});

// Redirect to index page '/'
router.get('/', (req, res) => {
  getAllStories()
    .then(function(storyData) {
      const templateVars = {
        storyData: openClose(cleanData(storyData)),
        userData: req.session
      };
      res.render('index', templateVars);
    }
    );
});

module.exports = router;
