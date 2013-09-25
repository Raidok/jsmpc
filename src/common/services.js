angular.module('services', [])
.factory('Commands', ['$http', function( $http ) {

  var path = 'commands/';

  return {
    currentsong: function(callback) {
      $http.get(path+'currentsong').success(function(data) {
        // prepare data here
          data = data.split("\n"); // temporary
        callback(data);
      });
    },
    listall: function(callback) {
      $http.get(path+'listall').success(function(data) {
          data = data.split("\n");
          var dirs = [], files = [];
          for (var i = data.length - 1, d = 0, f = 0; i > 0; i--) { // ignore first line
            tmp = data[i].split(":");
            if (tmp[0] == "file") {
              files[f] = tmp[1];
              f++;
            } else if (tmp[0] == "directory") {
              dirs[d] = {
                name: tmp[1],
                files: files
              };
              files = [];
              f = 0;
              d++;
            }
          }
          callback(dirs.reverse());
        });
    },
    listallinfo: function(callback) {
      $http.get(path+'listallinfo').success(function(data) {
          // prepare data here
          data = data.split("\n"); // temporary
          callback(data);
        });
    },
    lsinfo: function(callback) {
      $http.get(path+'lsinfo').success(function(data) {
          // prepare data here
          data = data.split("\n"); // temporary
          callback(data);
        });
    },
    playlist: function(callback) {
      $http.get(path+'playlist').success(function(data) {
          data = data.split("\n");
          var Playlist = [], tmp = [];
          for (var i = data.length - 2; i > 0; i--) { // ignore first and last line
            tmp = data[i].split(":");
            Playlist[i-1] = {
              type : tmp[1],
              file : tmp[2].substring(1)
            };
          }
          callback(Playlist);
        });
    },
    status: function(callback) {
      $http.get(path+'status').success(function(data) {
          // prepare data here
          data = data.split("\n"); // temporary
          callback(data);
        });
    }
  };
}]);
