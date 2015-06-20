(function(){

	var eventsController = angular.module('eventsController', ['uiGmapgoogle-maps'])

	// Get All Events
	.controller('mockDataController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.mockData = data;
		});
	}])


	// Routing
	.controller('eventDetailController', ['$scope', '$routeParams', '$http', 
	  function($scope, $routeParams, $http) {
	    $scope.eventId = $routeParams.eventId;
		$http.get('https://tyrelleventsdb.firebaseio.com/events/'+ $routeParams.eventId +'.json').success(function(data){
			$scope.eventData = data;
			$scope.map = { center: { latitude: data.location.lat, longitude: data.location.lng }, zoom: 8 };
			$scope.marker = {
			      id: 0,
			      coords: {
			        latitude: data.location.lat,
			        longitude: data.location.lng
			      }
			};
		});	    
	  }])
})();

