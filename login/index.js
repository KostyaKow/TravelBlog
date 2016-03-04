

$(document).ready(() => {
   var adminOpts = $('#sidepanel li');
   adminOpts.addClass('list-group-item');
   //adminOpts.css('cursor', 'pointer');

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
}

function setEntriesList() {
   var entriesList = $('#entriesList');

   getData('getBlogPosts', (postList) => {
      for (var post in postList)
         alert(post);

   });
}
