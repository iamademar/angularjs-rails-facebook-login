( function() {
  'use strict';

  angular.module('fbauth')
  .controller('AuthCtrl', ['srvAuth', '$scope',

    function(srvAuth, $scope) {
      $scope.logout = function() {
        srvAuth.logout();
      }
      $scope.fblogin = function() {
        srvAuth.fblogin();
      }
    }

  ]);

})();