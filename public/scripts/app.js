// Client facing scripts here

$(document).ready(function() {
  $('.complete-clicker').on('click', function(event) {
    event.preventDefault();

    const storyId = $(this).data('story-id');

    completeStory(storyId);
  })

  $('.contribution-clicker').on('click', function(event) {
    event.preventDefault();

    const contributionId = $(this).data('contribution-id');
    const authorId = $(this).data('voter-id');

    likeContribution(contributionId, authorId);
  });

  $('.accept-clicker').on('click', function(event) {
    event.preventDefault();

    const storyId = $(this).data('story-id');
    const contributionId = $(this).data('contribution-id');
    const contributionBody = $(this).data('contribution-body');

    acceptContribution(storyId, contributionId, contributionBody);
  });
});

// Make a PATCH request to /api/stories/:id/complete to mark a story as complete
const completeStory = (storyId) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/stories/${storyId}/complete`,
    contentType: 'application/json',
    data: JSON.stringify({ storyId }),
  })
  .done(() => {
    window.location.reload();
  })
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log('Error:', errorThrown);
  });
};

// Make a POST request to /api/votes/:contributionId/like
const likeContribution = (contributionId, authorId) => {
  $.ajax({
    type: 'POST',
    url: `/api/votes/${contributionId}/like`,
    contentType: 'application/json',
    data: JSON.stringify({ contributionId, authorId }),
  })
  .done(() => {
    window.location.reload();
  })
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log('Error:', errorThrown);
  });
};

// Make a PATCH request to /api/contributions/:contributionId/accept
const acceptContribution = (storyId, contributionId, contributionBody) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/contributions/${contributionId}/accept`,
    contentType: 'application/json',
    data: JSON.stringify({ storyId, contributionId, contributionBody }),
  })
  .done(() => {
    window.location.reload();
  })
  .fail((jqXHR, textStatus, errorThrown) => {
    console.log('Error:', errorThrown);
  });
};
