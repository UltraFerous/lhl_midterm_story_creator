const express = require('express');
const router = express.Router();
const { addContribution } = require("../db/stories/contributions");
const { loginCheck } = require('../helpers/loginCheck.js');


// Create new contribution in contributions table, then redirect to story page
router.post('/:id', (req, res) => {
  const id = req.params.id;

  loginCheck(req.session)
    .then(function(check) {
      if (check === true) {
        return addContribution(req.session, req.body, id)
          .then(function(data) {
            return res.redirect(`/stories/${id}`);
          });
      }
      return res.redirect(`/users/login`);
    }
    );
});

// Accept contribution with matching id and incorporate it into the main story, then redirect to '/stories/:id'
router.patch('/:id/accept', (req, res) => { });

module.exports = router;
