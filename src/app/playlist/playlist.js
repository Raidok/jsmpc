angular.module( 'jsmpc.playlist', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'playlist', {
    url: '/playlist',
    views: {
      "main": {
        controller: 'PlaylistCtrl',
        templateUrl: 'playlist/playlist.tpl.html'
      }
    },
    data:{ pageTitle: 'Playlist' }
  });
})

.controller( 'PlaylistCtrl', function PlaylistCtrl( $scope, Commands, Utils ) {

  $scope.items = []; // init

  Commands.playlist( function (data) {
    console.log("PLAYLIST!");
    Utils.parseRaw(data);
    $scope.items = data;
    //$scope.parseMpdOutput(data);
  });
})
;

