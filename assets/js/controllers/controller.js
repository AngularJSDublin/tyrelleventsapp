// controller.js
(function(){
	angular.module('eventsController', [])

	//controller as syntax
	.controller('mockDataController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.mockData = data;
		});
	}])
})();

