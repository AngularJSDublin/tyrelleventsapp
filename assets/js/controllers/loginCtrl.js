angular.module('eventsApp')
  .controller('loginController', ['$scope', '$http', '$location', 'profile',
    function(
      $scope, $http, $location, profile) {

      // Logging Users In
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
                angular.extend(profile, data);
                if (data.role == 'admin') {
                  $location.path('/admin-home');
                } else {
                  $location.path('/event-list');
                }

              });
          }
        });
      }



    }
  ]);
