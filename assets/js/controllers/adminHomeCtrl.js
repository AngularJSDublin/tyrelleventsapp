angular.module('eventsApp')
  //Admin Home
  .controller('adminHomeCtrl', ['$rootScope', '$scope', '$http', 'profile',
    function($rootScope, $scope, $http, profile) {

      $scope.profile = $rootScope.profile;

      $http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(
        function(data) {
          $scope.mockData = data;
          for (var key in data) {
            $scope.mockData[key].eventFirebaseId = key;
          }
        });

    }
  ]);
