angular.module('eventsApp')
  .directive('notification', ['$rootScope','$timeout',function($rootScope, $timeout){

    return{
      templateUrl:'assets/js/directives/notification-directive.html',
      scope: {},
      restrict: "E",
      link: function(scope, el, atts){
        el.hide();
        $rootScope.$on('notificationAlert', function(e, data){
          scope.message = data.message;
          scope.alertClass = data.alertClass;
          el.fadeIn(500);
          $timeout(function () {
            el.fadeOut(500);
          }, 5000);
        })
      }


    }


}]);
