angular.module('eventsApp')
//Register 
.controller('eventController', [ '$scope', '$http',function($scope, $http) {
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
	
	
	$http.get('https://tyrelleventsdb.firebaseio.com/events/-JsFnbkOn7kKMnmwuIi7.json' ).success(function (data) {
      $scope.eventData = data;
    });
	
	console.log(data);
	
  // Editing Event
  $scope.editEvent = function (name,date,city,venue,category,description,allSpots,availableSpots,thumbnail,image,latitude,longitude){
    var ref = new Firebase("https://tyrelleventsdb.firebaseio.com/");
		
    var updateRef = ref.child("events/-JsFnbkOn7kKMnmwuIi7");
    updateRef.update({
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




