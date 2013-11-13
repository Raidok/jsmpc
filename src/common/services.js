angular.module('services', [])
.factory('Commands', ['$http', function( $http ) {

  var path = 'commands/';
  
  function growTree(node, branches, leaves) {
    if (branches.length === 0) {
      return growLeaves(node, leaves);
    }
    
    var branch = branches.shift();
    var child = node[branch];
    if (!child) {
      child = {};
    }
    
    node[branch] = growTree(child, branches, leaves);
    
    return node;
  }
  
  function growLeaves(node, leaves) {
    if (leaves.length > 0) {
      var index = leaves[0].lastIndexOf("/") + 1;
      for (var i = leaves.length - 1, j = 0; i >= 0; i--, j++) {
        node[i] = leaves[j].substring(index);
      }
      
    }
    return node;
  }

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
          var root = [], leaves = [];
          for (var i = data.length - 2; i >= 0; i--) {
            var tmp = data[i].split(": ");
            var type = tmp[0];
            var name = tmp[1];
            if (type) {
              if (type == "file") {
                leaves.push(name);
              } else if (type == "directory") {
                console.log(name);
                root = growTree(root, !name?name:name.split("/"), leaves);
                leaves = [];
              }
            }
          }
          console.log(root);
          callback(root);
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
