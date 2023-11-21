const express = require('express');
const router = express.Router();
const { getAllStories, getSingleStory } = require("../db/stories/stories");

const cleanData = function(data){
  let dataKeys = Object.keys(data);
  const previewLength = 5;
  let previewString = "";

  for(let text of dataKeys){
    for(let i = 0; i < data[text].body.length && i < previewLength; i++){
      previewString += data[text].body[i];
    }
    data[text].body = previewString + "...";
    previewString = "";
  }
  return data;
};

const openClose = function(data){
  let dataKeys = Object.keys(data);
  for(let key of dataKeys){
    if(data[key].status === true){
      data[key].status = "Open";
    }
    else{
      data[key].status = "Closed";
    }
  }
  return data
}

// Render story page for story with matching id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  getSingleStory(id)
    .then(function(storyData) {
      const templateVars = {
        storyData: (storyData),
        userData: req.session
      };
      res.render('storyPage', openClose(templateVars));
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
      console.log(req.session);
      res.render('index', templateVars);
    }
    );
});



// Render create new story page
router.get('/new', (req, res) => { });


module.exports = router;
