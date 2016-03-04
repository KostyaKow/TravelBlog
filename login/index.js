

$(document).ready(() => {
   var adminOpts = $('#sidepanel li');
   adminOpts.addClass('list-group-item');

   adminOpts.click(function(e) {
      loadPage($(this).text());
   });

   loadPage('Pages'); //default
});

function loadPage(name) {
   var adminOpts = $('#sidepanel li');
   adminOpts.removeClass('selected');

   adminOpts.each(function() {
      var currName = $(this).text();
      if (name == currName)
         $(this).addClass('selected');
   });

   $('.admin-page').addClass('hidden');
   $('#' + name).removeClass('hidden');

   if (name == 'Pages')
      getBlogPosts();
}

function getBlogPosts(tag) {
   if (typeof tag == null)
      var tag = null;

   var entriesList = $('#entriesList');

   getData('getBlogPosts', (posts) => {
      var blogPostsHtml = '';

      for (var i in posts) {
         var post = posts[i];
         blogPostsHtml += `${post.title}:${post.date}`;
      }
      $('#blogPosts').html(blogPostsHtml);
   });

   getData('getTagCounts', (tags) => {
      var tagsHtml = 'all</br>';
      for (var tag in tags)
         tagsHtml += `${tag}:${tags[tag]}</br>`;
      $('#tagList').html(tagsHtml);
   });
}

