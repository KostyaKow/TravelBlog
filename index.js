var serv_url = 'http://forty7.guru/ira/'


var app = angular.module('iraBlog', []);
app.controller('iraBlog', function($scope, $http, $sce) {
   $scope.countryCounts = [];
   $scope.previewList = [];
   //$scope.posts = [];

   $scope.showSort = true;

   //maybe Month day, year (December 5, 2015)
   $scope.formatPostDate = (post) => formatJsDate(post['date']*1000);

   $scope.getData = (dataToGet, callback) => {
      var callbackApply = (data) => {
         callback(data);
         $scope.$apply();
      };
      getData(dataToGet, callbackApply);
   }

   //setup page data
   getData('getCountryCounts',
           (res) => $scope.countryCounts = res );

   var previewReqOptions = {
      'data'         : 'getPreviews',
      'page'         : 0,
      'sortReverse'  : false,
      'sortType'     : 'date' //'date' or 'views'
   };
   $scope.getData(previewReqOptions,
                  (res) => $scope.previewList = res);

   //[{'title':x, 'countries':[x], 'data':'x', 'date':'x'}]
   $scope.getData('getBlogPosts', (postList) => {
      $scope.posts = postList;

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

   $scope.countrySelect = (country) => alert('selecting country '+country);

   $scope.openPost = (name) => {
      window.open(serv_url + 'blogEntry' + '?page=' + name);
   }
});


//top navigation window.
$(() => {
   $('#topNav a').click((event) => {
      $('#topNav li').removeClass('active');
      var name = $(event.target).text(); //var name = $(this).text();
      $('#' + name + 'Li').addClass('active');
   });

});
//$('#sortBy')
