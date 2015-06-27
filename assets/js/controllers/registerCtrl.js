angular.module('eventsApp')
  //Register 
  .controller('signupController', ['$scope', function ($scope) {
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";

    // Creating User Accounts
    $scope.createAccount = function (email, password, confirmPassword) {
      if ($scope.password !== $scope.confirmPassword) {
        $scope.statusMessage = "Looks like your password doesn't match";
        return;
      }
      var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
      ref.createUser({
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }, function (error) {
        $scope.$apply(function () {
          handleResponse(error);
        });
      });
    };

    function handleResponse(error) {
      if (error) {
        $scope.statusMessage = "Error creating your account, please try again later";
      } else {
        $scope.statusMessage = "Your account has been created successfully ";
      }
    }

    // Reset Password
    $scope.resetPass = function (email) {
      var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
      ref.resetPassword({
        email: email
      }, function (error) {
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
