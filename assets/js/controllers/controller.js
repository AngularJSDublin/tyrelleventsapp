// controller.js
(function(){
	angular.module('eventsControllerModule', [])

	//controller as syntax
	.controller('EventsController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.eventsData = data;
		});
	}])

	// .controller('EventsDetailsController', ['$scope', '$http', function($scope, $http){
	// 	$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
	// 		$scope.eventsData = data;
	// 	});
	// }])

	.controller('EventsDetailsController', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$scope.allSpots = $routeParams.allSpots;
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.eventsDetailsData = data;
		});
	}]);

})();

