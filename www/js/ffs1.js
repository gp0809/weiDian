angular.module('ffs.controller', [])

  .controller('myController', function ($scope, $http) {
  $http.get('./mock/ffs.json')
    .then(
      function (res) {
      	console.log(res);
        $scope.livelist = res;
      }
    )
})