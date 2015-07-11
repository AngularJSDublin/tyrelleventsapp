angular.module('eventsApp')
  .controller('loginController', ['$rootScope', '$scope', '$http', '$location',
    '$cookies',
    'profile',
    function(
      $rootScope, $scope, $http, $location, $cookies, profile) {

      // Log Users In
      $scope.login = function(email, password) {
        var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
        ref.authWithPassword({
          email: email,
          password: password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:",
              authData);

            $http.get('https://tyrelleventsdb.firebaseio.com/users/' +
              authData.uid + '.json?' + 'auth=' + authData.token).success(
              function(data) {
                $cookies.putObject('userProfile', data);
                angular.extend($rootScope.profile, data);
                if (data.role == 'admin') {
                  $location.path('/admin-home');
                } else {
                  $location.path('/event-list');
                }

              });
          }
        });
      }

      // Log Users Out
      $scope.logOut = function (data){
        console.log("log out");
          $cookies.remove('userProfile', data);
            window.location.reload(true);
      }
    }
  ]);
