
var serv_url = 'http://forty7.guru/ira/serv'



var app = angular.module('iraBlog', []);
app.controller('iraBlog', function($scope, $http) {
   $scope.countries = [];

   //request specific data from server   
   $scope.getData = function (dataToGet, callBack) {
      var req_url =  serv_url + '?data=' + dataToGet;
      $http.get(req_url).then(function (data) {
         callBack(data.data);
      });
   };

   $scope.getData('getPosts', (countriesDict) => {
      alert(countriesDict.toSource());
      var countries = [];
      for (key in countriesDict) {
         countries.push({'count':countriesDict[key], 'name':key});
      }
      //alert(countriesDict.toSource());
      $scope.countries = countries;
   });

   /*[
      {'name': 'US', 'count': 1},
      {'name': 'Russia', 'count': 5}
   ];*/

   $scope.countrySelect = function(country) {
      alert(country.name);
   }

});


