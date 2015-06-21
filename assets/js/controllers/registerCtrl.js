angular.module('eventsApp')
//Register 
.controller('registerController', [ '$scope', function($scope) {
    $scope.email = "";
    $scope.password = "";
  
  // Creating User Accounts
  $scope.createAccount = function (email, password){
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
    ref.createUser({
      email    : email,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:" + userData.uid);
      }
    });
  };
  
  // Logging Users In
  $scope.login = function (email, password){
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
    ref.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }
  
}]);  




