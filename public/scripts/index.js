
const escapeFunc = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const loadStories = function() {
  $.ajax({
    type: 'GET',
    url: '/stories',
  }).then(function(data) {
    $('.stories').empty();
    console.log("We got the stories!")
    // renderStories(data);
  })
};

loadStories();

// const renderStories = function(stories) {
//   let story;
//   for (let data in stories) {
//     story = callback(tweets[data]);
//     $(".stories").prepend(story);
//   }
// };

$(document).ready(function() {
  loadStories();
});
