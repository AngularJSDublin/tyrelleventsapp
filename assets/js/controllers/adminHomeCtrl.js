angular.module('eventsApp')
  //Admin Home
  .controller('adminHomeCtrl', ['$scope', '$http', function ($scope, $http) {



    $http.get('https://tyrelleventsdb.firebaseio.com/users/' + tokenStorage.uid + '.json').success(function (data) {
      $scope.user = {
        isAdmin: data.role == 'admin'
      };
    });

    $http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function (data) {
      $scope.mockData = data;
    });


  }]);
