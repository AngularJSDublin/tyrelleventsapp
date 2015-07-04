(function() {

  var eventsController = angular.module('eventsController', [])


  // Get All Events
  .controller('mockDataController', ['$scope', '$http', 'token', function(
    $scope, $http, token) {

    var getToken = localStorage.getItem(
      'firebase:session::tyrelleventsdb');
    var tokenStorage = JSON.parse(getToken);

    $http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(
      function(data) {
        $scope.mockData = data;
        console.log(data);
        for (var key in data) {
          $scope.mockData[key].eventFirebaseId = key;
        }
        console.log($scope.mockData);
      });
  }])



  // Routing
  .controller('eventDetailController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $scope.eventId = $routeParams.eventId;
      $http.get('https://tyrelleventsdb.firebaseio.com/events/' +
        $routeParams.eventId + '.json').success(function(data) {
        $scope.eventData = data;
        $scope.map = {
          center: {
            latitude: data.location.lat,
            longitude: data.location.lng
          },
          zoom: 15
        };
        $scope.marker = {
          id: 0,
          coords: {
            latitude: data.location.lat,
            longitude: data.location.lng
          }
        };
      });
    }
  ])
})();
