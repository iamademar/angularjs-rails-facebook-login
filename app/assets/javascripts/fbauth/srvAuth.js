( function() {
  'use strict';

  angular.module('fbauth')
  .factory("srvAuth", ['$rootScope',
    function($rootScope) {
      var srvAuth = {};


      srvAuth.fblogin = function() {
        FB.login(function (response) {
          if (response.status === 'connected') {
            // You can now do what you want with the data fb gave you.
            console.info(response);
          }
        });        
      }

      srvAuth.watchLoginChange = function() {
        var _self = this;
        FB.Event.subscribe('auth.authResponseChange', function(res) {
          if (res.status === 'connected') {
            FB.api('/me', function(res) {
              $rootScope.$apply(function() {
                $rootScope.user = _self.user = res;
                console.info($rootScope.user);
              });
            });
          } else {
            alert('Not Connected');
          }
        });
      }

      srvAuth.logout = function() {
        var _self = this;
        FB.logout(function(response) {
          $rootScope.$apply(function() {
            $rootScope.user = _self.user = {};
          });
        });
      }

      return srvAuth;
    }

  ]);


})();