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
        console.log("Successfully created user account with uid:", userData.uid);
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

  // Reset Password
  $scope.resetPass = function (email){
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
    ref.resetPassword({
      email: email
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error resetting password:", error);
        }
      } else {
        console.log("Password reset email sent successfully!");
      }
    });
  }
  
}]);  




