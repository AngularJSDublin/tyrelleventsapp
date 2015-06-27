angular.module('eventsApp')
//Register 
.controller('signupController', [ '$scope', function($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";
  
  // Creating User Accounts
  $scope.createAccount = function (email, password, confirmPassword){
    if($scope.password !== $scope.confirmPassword){
      $scope.statusMessage = "Looks like your password doens't match";
      return;
    }
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
    ref.createUser({
      email    : email,
      password : password,
      confirmPassword : confirmPassword
    }, function(error, userData) {
			
			
      if (error) {
        console.log("Error creating user:", error);
      } else {
        $scope.statusMessage = "Your account has been created successfully ";;
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




