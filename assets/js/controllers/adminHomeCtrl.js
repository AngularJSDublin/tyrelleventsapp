angular.module('eventsApp')
  //Admin Home
  .controller('adminHomeCtrl', ['$scope', '$http', 'profile', function($scope,
    $http, profile) {

    $scope.profile = profile;

    $http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(
      function(data) {
        $scope.mockData = data;
        for (var key in data) {
          $scope.mockData[key].eventFirebaseId = key;
        }
      });

  }]);
