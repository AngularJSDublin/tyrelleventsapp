angular.module('eventsApp')
  //Sign Up
  .controller('signupController', ['$scope','$location', function ($scope, $location) {
    $scope.email = "";
    $scope.password = "";
    $scope.confirmPassword = "";

    // Creating User Accounts
    $scope.createAccount = function (firstName, lastName, email, password, confirmPassword) {
      if ($scope.password !== $scope.confirmPassword) {
        $scope.statusMessage = "Looks like your password doesn't match";
        return;
      }
      var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
      ref.createUser({
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }, function (error, authData) {

        if (error) {
          $scope.$apply(function () {
            handleResponse(error);
          })
        } else {
          var usersRef = ref.child("users/" + authData.uid);
          var user = {firstName: firstName, lastName: lastName, email: email, role: 'user'};

          $scope.$emit('notificationAlert',{
            message: 'Your account has been created sucessfully, you are now ready to login to the Tyrell Events app!',
            alertClass: 'success'
          })

          $scope.$apply(function () {
            $location.path('/login');
          })

          usersRef.set(user);
        }
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
