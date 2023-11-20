const loadStories = function() {
  $.ajax({
    type: 'GET',
    url: '/stories',
  }).then(function(data) {
    $('.stories').empty();
    console.log("We got the stories!")
    console.log("Data:", data);
  })
};

$(document).ready(function() {
  console.log("123");
  loadStories();
});

