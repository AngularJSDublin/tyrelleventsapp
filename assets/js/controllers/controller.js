// controller.js
(function(){
	angular.module('eventsController', [])

	//controller as syntax
	.controller('mockDataController', ['$scope', '$http', function($scope, $http){
		$http.get('https://tyrelleventsdb.firebaseio.com/events.json').success(function(data){
			$scope.mockData = data;
		});
	}])

	.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	});

})();

