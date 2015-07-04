angular.module('eventsApp')
  //Admin Home
  .controller('adminListCtrl', ['$scope', '$http', 'profile', function($scope,
    $http, profile) {

    $scope.profile = profile;

    $http.get('https://tyrelleventsdb.firebaseio.com/users.json').success(
      function(data) {
        
      //  var filteredData = data.filter(function(item) { return item[Object.keys(item)[0]].role === 'admin' });
        var arr = Object.keys(data);
        var filteredData = arr.map(function(val) { if (data[val].role === 'admin') return data[val] });

        $scope.adminUsers = filteredData;
      });


    $scope.remove = function(user) {
      
	  var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/users" + user);
	  ref.update({
	    role: 'user'
	  }, function(error) {
        if (error) {
          console.log('Synchronization failed');
        } else {
          console.log('Synchronization succeeded');
        }
	  });

    }
  }]);