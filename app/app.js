(function () {

  var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsController',
		'uiGmapgoogle-maps'
	]);

  app.config(['$routeProvider',
	  function ($routeProvider) {
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
        controller: 'loginController'
      }).
      when('/signup', {
        templateUrl: 'assets/js/templates/signup.html',
        controller: 'signupController'
      }).
      when('/admin-home', {
        templateUrl: 'assets/js/templates/admin-home.html',
        controller: 'adminHomeCtrl'
      }).
      when('/admin-list', {
        templateUrl: 'assets/js/templates/admin-list.html',
        controller: 'adminListCtrl'
      }).      
      when('/add-event', {
        templateUrl: 'assets/js/templates/add-event.html',
        controller: 'eventController'
      }).
      when('/edit-event', {
        templateUrl: 'assets/js/templates/edit-event.html',
        controller: 'eventController'
      }).
      otherwise({
        redirectTo: '/'
      });
	  }]);

})();