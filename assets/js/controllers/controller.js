// controller.js
(function(){
	angular.module('eventsController', []);

	//controller as syntax
	.controller('SampleController', function(){
		this.welcome = 'Welcome to the first AngularJS workshop.'
	});

	.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	});
})();

