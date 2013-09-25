describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'jsmpc' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope, Commands, Utils ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope, Commands: Commands, Utils: Utils });
    }));

    /*it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));*/
  });
});
