var serv_url = 'http://forty7.guru/ira/serv'


// returns [{'name':x, 'count':x}]
function getCountryCounts(postList) {
   var countryCounts = {};

   for (i in postList) {
      var post = postList[i];
      var postCountries = post['countries'];
      for (i in postCountries) {
         var ctrName = postCountries[i];
         if (countryCounts[ctrName] == undefined)
            countryCounts[ctrName] = 1;
         else countryCounts[ctrName] += 1;
      }
   }
   return countryCounts;
}

function getPreviewList(postList) {
   var sortedPosts = sort(postList, (posta, postb) => {
      var d1 = posta['date'], d2 = postb['date'];
      if (d1 == d2) return 0;
      if (d1 < d2) return 1;
      if (d1 > d2) return 2;
   });
   /*for (x in sortedPosts)
      alert(formatPostDate(sortedPosts[x]));*/
  /* var postsDates = map(postList, (post) => post['date']);
   var sortedDates = sort(postsDates, cmpNums);
   return sortedDates;*/
   return sortedPosts;
}

var app = angular.module('iraBlog', []);
app.controller('iraBlog', function($scope, $http, $sce) {
   $scope.countryCounts = [];
   $scope.previewList = [];
   //$scope.posts = [];

   $scope.showSort = true;

   //maybe Month day, year (December 5, 2015)
   $scope.formatPostDate = (post) => formatJsDate(post['date']*1000);

   //request specific data from server   
   $scope.getData = function (dataToGet, callBack) {
      var req_url =  serv_url + '?data=' + dataToGet;
      $http.get(req_url).then(function (data) {
         callBack(data.data);
      });
   };

   //[{'title':x, 'countries':[x], 'data':'x', 'date':'x'}]
   $scope.getData('getBlogPosts', (postList) => {
      $scope.posts = postList;
      $scope.countryCounts = getCountryCounts(postList);

      $scope.previewList = getPreviewList(postList);

      /*<div ng-repeat='x in posts'>
       * blah
       * <div ng-bind-html='x.htmlSafeData'>{{x.htmlSafeData}}</div>
       *</div> */
      for (x in $scope.posts) {
         var data = $scope.posts[x].data;
         data = $sce.trustAsHtml(data);
         $scope.posts[x].htmlSafeData = data;
      }

      for (x in $scope.previewList) {
         var data = $scope.previewList[x].data;
         data = data.replace(/<\/?[^>]+(>|$)/g, "");
         //data = $(data).text();
         data = $sce.trustAsHtml(data);
         $scope.previewList[x].data = data;
      }

      /*$scope.previewList.map(function (x) {
         return trustAsHtml(x);
      });*/
   });

   /*[{'name': 'US', 'count': 1},
      {'name': 'Russia', 'count': 5}
   ];*/

   $scope.countrySelect = function(country) {

   }

});

$(() => {

   $('#topNav a').click((event) => {
      $('#topNav li').removeClass('active');
      var name = $(event.target).text(); //var name = $(this).text();
      $('#' + name + 'Li').addClass('active');
   });

});
//$('#sortBy
