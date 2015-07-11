angular.module('eventsApp')
//Register
.controller('eventController', [ '$scope', '$http' ,'$routeParams', '$location' ,function($scope, $http, $routeParams, $location ) {
    $scope.name = "";
    $scope.date = "";
    $scope.city = "";
    $scope.venue = "";
    $scope.category = "";
    $scope.description = "";
    $scope.allSpots = "";
    $scope.availableSpots = "";
    $scope.thumbnail = "";
    $scope.image = "";
    $scope.latitude = "";
    $scope.longitude = "";

  // Creating Event
  $scope.addEvent = function (name,date,city,venue,category,description,allSpots,availableSpots,thumbnail,image,latitude,longitude){
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
    var postsRef = ref.child("events");
    postsRef.push({
      name: name,
      date: date,
      city: city,
      venue: venue,
      category: category,
      description: description,
      allSpots: allSpots,
      availableSpots: availableSpots,
      image: {
        large: image,
        small: thumbnail
      },
      location: {
        lat: latitude,
        lng: longitude
      }
    });
  };


	$http.get('https://tyrelleventsdb.firebaseio.com/events/'+ $routeParams.eventId + '.json' ).success(function (data) {
      $scope.eventData = data;
    });

  // Editing Event
  $scope.editEvent = function (){ 
    console.log('$routeParams.eventId ', $routeParams.eventId);

    var eventRef = new Firebase("https://tyrelleventsdb.firebaseio.com/events/" + $routeParams.eventId );
    eventRef.update($scope.eventData,function(error){
      if(error){
        console.log("Event not updated try again later");
      } else {
        $scope.$emit('notificationAlert',{
          message:  $scope.eventData.name + ' was updated sucessfully',
          alertClass: 'success'
        })
        // Redirects user to events list
        $scope.$apply(function(){
          $location.path('/');

          console.log("Event updated");
        });
      }

    });

  };
}]);
