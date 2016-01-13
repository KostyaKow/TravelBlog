var app = angular.module('iraBlog', []);
app.controller('iraBlog', function($scope) {
   $scope.countries = [
      {'name': 'US', 'count': 1},
      {'name': 'Russia', 'count': 5}

   ];
   $scope.countrySelect = function(country) {
      alert(country.name);
   }

});


