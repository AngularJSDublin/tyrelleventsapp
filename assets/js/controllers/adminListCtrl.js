angular.module('eventsApp')
  //Admin Home
  .controller('adminListCtrl', ['$scope', '$http', 'profile', function($scope,
    $http, profile) {

    $scope.profile = profile;

    $http.get('https://tyrelleventsdb.firebaseio.com/users.json').success(
      function(users) {
        console.log('data: ', users);

        $scope.adminUsers = [];

        for(var key in users){
          
          //console.log(users[key]);
          
          if(users[key].role === 'admin'){
            // create a new firebaseId key on the user object and assign simplelogin:34 or any other
            // string to it it will be used to edit user 
            users[key].firebaseId = key; 
            $scope.adminUsers.push(users[key]);
          }
        }
        console.log('$scope.adminUsers: ', $scope.adminUsers);        
      });



    $scope.remove = function(index, firebaseId) {
      
  	  var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/users/" + firebaseId);
  	  ref.update({
  	    role: 'user'
  	  }, function(error) {
          if (error) {
            console.log('Synchronization failed');
          } else {
            console.log('Synchronization succedsdsd   eded ' + index);
            //remove user from screen
            $scope.$apply(function(){
              $scope.adminUsers.splice(index, 1);
            });
          }
  	  });

    }; 

    $scope.modify = function(firebaseId) {

      var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/users/" + firebaseId);
      ref.update($scope.adminUserData, function(error) {
        if(error){
          console.log("Event not updated try again later");
        } else {
          $scope.$emit('notificationAlert',{
            message:$scope.eventData.name + ' was updated sucessfully',
            alertClass: 'success'
          })
          // Redirects user to events list
          $scope.$apply(function(){
            $location.path('/');

            console.log("Event updated");
          });
        }
      });


    }
  }]);