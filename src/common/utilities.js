angular.module('utilities', [])
.factory('Utils', [ function() {
  var SEPARATOR = ":";

  headTail = function( s, sep ) {
    var i = s.indexOf(sep);
    return [ s.substring(0, i), s.substring(i+1) ];
  };

  return {
    parseRaw : function(raw) {
      return raw;
    }
  };
}]);

