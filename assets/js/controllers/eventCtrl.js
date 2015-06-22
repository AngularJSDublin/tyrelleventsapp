angular.module('eventsApp')
//Register 
.controller('eventController', [ '$scope', function($scope) {
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
    $scope.latitude;
    $scope.longitude;
  
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
}]);  




