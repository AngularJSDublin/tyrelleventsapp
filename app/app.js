(function(){
	
	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsController',
		'uiGmapgoogle-maps'
	]);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/', {
	        templateUrl: 'assets/js/templates/events-list.html',
	        controller: 'mockDataController'
	      }).
	      when('/events/:eventId', {
	        templateUrl: 'assets/js/templates/event-detail.html',
	        controller: 'eventDetailController'
	      }).
	      when('/login/', {
	        templateUrl: 'assets/js/templates/login.html',
	        controller: 'registerController'
	      }).
	      when('/signup', {
	        templateUrl: 'assets/js/templates/signup.html',
	        controller: 'signupController'
	      }).
	      when('/add-event', {
	        templateUrl: 'assets/js/templates/add-event.html',
	        controller: 'eventController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);

})();

