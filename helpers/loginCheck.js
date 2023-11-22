const { getIndividualUser } = require('../db/queries/users');

const loginCheck = function(cookieData) {
  let sessionID = cookieData.id;
  let sessionName = cookieData.name;
  let sessionEmail = cookieData.email;

  return getIndividualUser('id', sessionID)
    .then(function(data) {
      if (data[0].email === sessionEmail && data[0].name === sessionName) {
        console.log("LOGIN CHECK GOOD");
        return true;
      }
    })
    .catch(function() {
      console.log("LOGIN CHECK BAD");
      return false;
    });
};

module.exports = { loginCheck };

// req.session should be cookieData

