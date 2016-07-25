var jscloak = require('jscloak');
var jutils = jscloak.utils;
var s = jutils.sprintf;
var toJ = jutils.toJ;
var addHtml = jutils.addHtml;
var contains = jutils.contains;

$(document).ready(() => {
   var sidePanelItems = $('#sidepanel li');
   sidePanelItems.addClass('list-group-item');

   sidePanelItems.click(function(e) {
      loadPage($(this).text());
   });

   loadPage('Pages'); //default
   editorOpen(); //kk debug deleteme

   $('#add-blog-entry').click(() => {
      editorOpen();
   });

});

function loadPage(name) {
   var sidePanI = $('#sidepanel li');
   sidePanI.removeClass('selected');

   //highlight selected item in sidepanel
   sidePanI.each(function() {
      var currName = $(this).text();
      if (name == currName)
         $(this).addClass('selected');
   });

   //hide all admin pages
   $('.admin-page').addClass('hidden');
   toJ(name).removeClass('hidden');

   if (name == 'Pages')
      getBlogPosts();
}

initEditor = false;
tagCount = 0;

window.quillText = null;

window.removeTag = function(i) {
   $('#tag-' + i).html('');
};

function editorInit() {
   if (initEditor) return;
   initEditor = true;

   $('#editor-title').attr('placeholder', 'Enter Title');

   $('#upload-post-btn').click(() => {
      var tags = [];
      $('#display-tags .tag-span').each(function(i, tag) {
         var tag = $(this).text();
         tag = tag.substring(0, tag.length-1);
         if (tag.length > 0) tags.push(tag);
      });

      var uploadPost = {
         'action' : 'uploadBlogPost',
         'title'  : $('#editor-title').val(),
         //'date'   : new Date(), //we should set it ourselves
         'tags'   : JSON.stringify(tags),
         'data'   : window.quillText
      };
      getData(uploadPost, (res) => console.log(res));
   });

   var tags = $('#editor-tags-input');
   var tagsPH = 'tag1, tag2, tag3, ...';
   tags.attr('placeholder', tagsPH);

   //tags.on('change keyup paste')
   //tags.keypress(() => null);
   //comma 188, space 32, enter 13
   var tagKeys = [13, 32, 188];

   tags.keydown(function(e) {
      if (contains(tagKeys, e.keyCode))
         return false;
      return true;
   });
   tags.on('keyup', function(e) {
      if (contains(tagKeys, e.keyCode)) {
         var rmTag = s('<a %s onclick="window.removeTag(%i)">x</a>',
                       'class="remove-tag-btn"', tagCount);
         if (tags.val().length < 2) return;

         var html = s('<span id="tag-%s" class="%s">%s%s</span>',
                      tagCount, 'badge tag-span', tags.val(), rmTag);
         tags.val('');
         addHtml('display-tags', html);
         tagCount++;
      }
   });

}

function editorOpen(name) {
   editorInit();
   loadPage('Editor');
   tagCount = 0;
}

function getBlogPosts(tag) {
   if (typeof tag == null)
      var tag = null;
   var entriesList = $('#entriesList');

   //populate tags
   getData('getTagCounts', (tags) => {
      var tagsHtml = s('<li><a>all</a><span>%i</span></li>',
                       Object.keys(tags).length);

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
   //populate posts
   getData('getBlogPosts', (posts) => {
      var blogPostsHtml = '';

      for (var i in posts) {
         var post = posts[i];
         var date = post.date;
         var formattedDate = formatJsDate(date * 1000);
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

         var postHtml = s('<li><button postid="%s">edit</button>', date);
         postHtml += s('<i>%s</i> %s', formattedDate, title);
         for (var i in tags)
            postHtml += s('<span class="badge">%s</span>', tags[i]);
         postHtml += '</li>';

         blogPostsHtml += postHtml;
      }

      $('#blog-posts').html(blogPostsHtml);
      $('#blog-posts li').addClass('list-group-item');
      $('#blog-posts li button').addClass('edit-post-btn');

      $('.edit-post-btn').click(function(e) {
         editorOpen($(this).attr('postid'));
      });
   });
}

