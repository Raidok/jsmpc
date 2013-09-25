angular.module( 'jsmpc.browse', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'browse', {
    url: '/browse',
    views: {
      "main": {
        controller: 'BrowseCtrl',
        templateUrl: 'browse/browse.tpl.html'
      }
    },
    data:{ pageTitle: 'Browse' }
  });
})

.controller( 'BrowseCtrl', function BrowseCtrl( $scope, Commands ) {

  $scope.dirs = []; // init
  $scope.path = [];
  
  Commands.listall( function (data) {
    console.log('LISTALL!');
    $scope.dirs = data;
  });
  
  $scope.dirUp = function () {
    console.log('up');
  };
  
  $scope.dirDown = function () {
    console.log('down');
  };

})

;

