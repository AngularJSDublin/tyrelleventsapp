(function(){
	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsControllerModule'
	])

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		  .when('/home', {
		    templateUrl : '/assets/js/templates/home.html',
            controller  : 'EventsController'
		  })
		  .when('/events-details/:allSpots', {
		    templateUrl : '/assets/js/templates/events-details.html',
            controller  : 'EventsDetailsController'
		  })
		  .otherwise({
		    redirectTo: '/home'
		  });
	}]);

	// Route configuration
    // .config(function($routeProvider) {
    //     $routeProvider

    //         // route for the home page
    //         .when('/home', {
    //             templateUrl : 'assets/js/templates/home.html',
    //             controller  : 'EventsController'
    //         })

    //         // route for the about page
    //         .when('/events-details', {
    //             templateUrl : 'assets/js/templates/events-details.html',
    //             controller  : 'EventsDetailsController'
    //         })

    //         otherwise({
		  //   	redirectTo: '/home'
		  //   });
    // });
})();

