var jscloak = require('jscloak');
var jutils = jscloak.utils;
var s = jutils.sprintf;

$(document).ready(() => {
   var adminOpts = $('#sidepanel li');
   adminOpts.addClass('list-group-item');

   adminOpts.click(function(e) {
      loadPage($(this).text());
   });

   loadPage('Pages'); //default

   $('#add-blog-entry').click(() => {
      //$("#content-container").toggleClass("hidden");
      loadPage('Editor');
   });
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

   getData('getTagCounts', (tags) => {
      var tagsHtml = '<li><a>all</a></li>';
      for (var tag in tags) {
         var count = tags[tag];
         var tagHtml = s('<li><a>%s</a> <span>%i</span></li>',
                         tag, count);
         tagsHtml += tagHtml;
      }
      $('#tag-list').html(tagsHtml);
      $('#tag-list li').addClass('list-group-item');
      $('#tag-list li span').addClass('badge');

      $('#tag-list li').click(function() {
         getBlogPosts($(this).find('a').text());
      });
   });

   getData('getBlogPosts', (posts) => {
      var blogPostsHtml = '';

      for (var i in posts) {
         var post = posts[i];
         var date = formatJsDate(post.date * 1000);
         var tags = post.tags;

         //check that the tag is good
         var displayEntry = false;
         if (tag == null || tag == 'all')
            displayEntry = true;
         else {
            for (var i in tags) {
               if (tags[i] == tag)
                  displayEntry = true;
            }
         }
         if (!displayEntry)
            continue;
         //tag

         var title = post.title;
         if (title.length > 20)
            title = title.substring(0, 20) + '...';

         var postHtml = '<li><button>edit</button>';
         postHtml += s('%s %s', date, title);
         for (var i in tags)
            postHtml += s('<span class="badge">%s</span>', tags[i]);
         postHtml += '</li>';

         blogPostsHtml += postHtml;
      }
      $('#blog-posts').html(blogPostsHtml);
      $('#blog-posts li').addClass('list-group-item');
      $('#blog-posts li button').addClass('edit-post-btn');
   });

}

