(function(){

	var eventsController = angular.module('eventsController', [])

	// Get All Events
	.controller('mockDataController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.mockData = data;
		});
	}])

	// Get All Events
	.controller('singleEventController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events/'+ $routeParams.eventId +'.json').success(function(data){
			$scope.eventData = data;
		});
	}])

	// Routing
	.controller('eventDetailController', ['$scope', '$routeParams',
	  function($scope, $routeParams) {
	    $scope.eventId = $routeParams.eventId;
	  }]);
	
})();

