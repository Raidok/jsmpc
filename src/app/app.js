angular.module( 'jsmpc', [
  'templates-app',
  'templates-common',
  'jsmpc.control',
  'jsmpc.playlist',
  'jsmpc.browse',
  'services',
  'utilities',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/control' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, Commands, Utils ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | jsmpc' ;
    }
  });

  Commands.currentsong( function ( data ) {
    console.log(data);
  });
})

;

