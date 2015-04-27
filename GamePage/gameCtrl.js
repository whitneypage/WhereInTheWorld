var app = angular.module('mapApp');

app.controller('gameCtrl', function($scope, gameService) {

//$scope.coordinates = chance.coordinates().replace(/,/g, '').split(" ");
//console.log($scope.coordinates);

 //var lat = $scope.coordinates[0]  
 //var long = $scope.coordinates[1]

 $scope.score = 0;


$scope.map = {
	center: { 
	  latitude: gameService.latitude, 
	  longitude: gameService.longitude 
	}, 
	zoom: 18,
	};
	

$scope.options = {
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControl: false,
	minZoom: 11,
	maxZoom: 18
	
 };



$scope.addScore = function() {	
    if ($scope.userGuess.toLowerCase() === gameService.stateName){
	    $scope.score += 100;
	    alert("You got it right!")
    } else {
    	alert("Sorry Sucker")
    }
  $scope.userGuess = "";
}





}); // ends controller