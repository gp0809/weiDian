angular.module('starter.controller', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('homeController',['$scope','$http',function ($scope,$http) {
    $http.get('/mock/home.json').then(function (res) {
        $scope.good = res.data.data;
        console.log($scope.good[0].fImg);
      });
  }]);
