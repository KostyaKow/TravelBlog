
var serv_url = 'http://forty7.guru/ira/serv'



var app = angular.module('iraBlog', []);
app.controller('iraBlog', function($scope, $http) {
   $scope.countries = [];
   
   $scope.getData = function (dataToGet, callBack) {
      var req_url =  serv_url + '?data=' + dataToGet;
      $http.get(req_url).then(function (data) {
         callBack(data.data);
      });
   };

   function setCountries(countries) {
      $scope.countries = countries;
   }
   $scope.getData('countryCount', setCountries);

   /*[
      {'name': 'US', 'count': 1},
      {'name': 'Russia', 'count': 5}
   ];*/

   $scope.countrySelect = function(country) {
      alert(country.name);
   }

});


