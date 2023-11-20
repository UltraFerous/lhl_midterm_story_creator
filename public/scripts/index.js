// const escapeFunc = function(str) {
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(str));
//   return div.innerHTML;
// };

// const openClosed = function(status) {
//   if (status = true) {
//     return "Open";
//   }
//   return "Closed";
// };

// const storyPreview = function(story) {
//   const storyPreviewLength = 50;
//   let shortenShort = '';
//   for (let i = 0; i < storyPreviewLength && i < story.length; i++) {
//     shortenShort += story[i];
//   }
//   return shortenShort;
// };

// const renderStories = function(stories) {
//   let newStory;
//   for (let data in stories) {
//     newStory = createStoryElement(stories[data]);
//     $(".story-list").prepend(newStory);
//   }
// };

// const createStoryElement = function(storyData) {
//   let $storyElement = `
//     <div class="story-overview">
//     <h1 class="story-overview-title"> ${escapeFunc(storyData.title)} </h1>
//     <h2 class="story-overview-author"> BY ${escapeFunc(storyData.name)} </h2>
//     <h2 class="story-overview-preview"> ${escapeFunc(storyPreview(storyData.body))} </h2>
//     Contribute
//     <h3 class="story-overview-status"> ${openClosed(storyData.status)} </h3>
//     </div>
//     `;
//   return $storyElement;
// };

// const loadStories = function() {
//   $.ajax({
//     type: 'GET',
//     url: '/stories',
//   }).then(function(data) {
//     $('.story-list').empty();
//     renderStories(data);
//   });
// };

// $(document).ready(function() {
//   loadStories();
// });

