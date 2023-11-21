const express = require('express');
const router = express.Router();
const { getAllStories } = require("../db/stories/stories");
const { getSingleStory } = require("../db/stories/singleStory");

const cleanData = function(data){
  let dataKeys = Object.keys(data);
  const preivewLength = 5;
  let previewString = "";

  for(let key of dataKeys){
    if(data[key].status === true){
      data[key].status = "Open";
    }
    else{
      data[key].status = "Closed";
    }
  }
  for(let text of dataKeys){
    for(let i = 0; i < data[text].body.length && i < preivewLength; i++){
      previewString += data[text].body[i];
    }
    data[text].body = previewString;
    previewString = "";
  }
  return data;
};

// Render story page for story with matching id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  getSingleStory(id)
    .then(function(storyData) {
      const templateVars = {
        storyData: storyData
      };
      res.render('storyPage', templateVars);
    });
});

// Redirect to index page '/'
router.get('/', (req, res) => {
  getAllStories()
    .then(function(storyData) {
      const templateVars = {
        storyData: cleanData(storyData)
      };
      console.log(typeof templateVars.storyData);
      console.log(templateVars.storyData);
      res.render('index', templateVars);
    }
    );
});



// Render create new story page
router.get('/new', (req, res) => { });


module.exports = router;
