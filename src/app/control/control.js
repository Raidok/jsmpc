angular.module( 'jsmpc.control', [
  'ui.state',
//  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'control', {
    url: '/control',
    views: {
      "main": {
        controller: 'ControlCtrl',
        templateUrl: 'control/control.tpl.html'
      }
    },
    data:{ pageTitle: 'Control' }
  });
})

.controller( 'ControlCtrl', function ControlCtrl( $scope ) {
  $scope.isPlaying = false;
  $scope.previous = function () {
    console.log('previous');
  };
  $scope.playpause = function () {
    $scope.isPlaying = !$scope.isPlaying;
    console.log('playpause');
  };
  $scope.stop = function () {
    console.log('stop');
  };
  $scope.next = function () {
    console.log('next');
  };
})

;

