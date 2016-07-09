angular.module('starter.controller', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('listController', ['$scope', '$ionicListDelegate', function ($scope, $ionicListDelegate) {
    $scope.scrollAction = function () {
      console.log('scrolling...');
    };

    $scope.scrollEndAction = function () {
      console.log('scroll complete~');
    };

    var items = [
      {
        title: 'titlew',
        description: 'description 1'
      },
      {
        title: 'title0',
        description: 'description 1'
      },
      {
        title: 'title-1',
        description: 'description 1'
      },
      {
        title: 'title-2',
        description: 'description 1'
      },
      {
        title: 'title1',
        description: 'description 1'
      },
      {
        title: 'title2',
        description: 'description 1'
      },
      {
        title: 'title3',
        description: 'description 1'
      },
      {
        title: 'title4',
        description: 'description 1'
      },
      {
        title: 'title5',
        description: 'description 1'
      },
      {
        title: 'title6',
        description: 'description 1'
      },
      {
        title: 'title7',
        description: 'description 1'
      },
      {
        title: 'title8',
        description: 'description 1'
      },
      {
        title: 'title9',
        description: 'description 1'
      }
    ];

    $scope.items = items;

    $scope.showDelete = false;

    $scope.showReorder = false;

    $scope.moveItem = function (item, $fromIndex, $toIndex) {
      items.splice($fromIndex, 1);
      items.splice($toIndex, 0, item);
    }

    $scope.showDeleteButton = function () {
      $ionicListDelegate.showDelete($scope.showDelete = !$scope.showDelete);
    }
  }])
