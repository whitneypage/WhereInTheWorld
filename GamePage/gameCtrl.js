var app = angular.module('mapApp');

app.controller('gameCtrl', function($scope, gameService, $timeout, $location) {

//$scope.coordinates = chance.coordinates().replace(/,/g, '').split(" ");
//console.log($scope.coordinates);

 //var lat = $scope.coordinates[0]  
 //var long = $scope.coordinates[1]

 $scope.score = 0;


$scope.map = {
	center: { 
	  latitude:gameService.random.latitude,
	  longitude:gameService.random.longitude
	}, 
	zoom: 18,
	};
	

$scope.options = {
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControl: false,
	minZoom: 11,
	maxZoom: 18
	
 };


var counter = 10;
$scope.addScore = function() {	
    if ($scope.userGuess.toLowerCase() === gameService.random.name){
	    $scope.score += 100;
	    alert("You got it right!");
	    gameService.delete($scope.userGuess.toLowerCase());
	    $scope.map = gameService.getNewMap();
	    console.log($scope.map);
	    counter --;


    } else {
    	alert("Sorry Sucker");
    	$timeout(function(){
    		$scope.map = gameService.getNewMap();
    	});
    	counter --;
    }
  $scope.userGuess = "";
}

if(counter === 0) {
	$location.path('/score')
}




}); // ends controller