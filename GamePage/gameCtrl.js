var app = angular.module('mapApp');

app.controller('gameCtrl', function($scope, gameService) {

//$scope.coordinates = chance.coordinates().split(' ').join('');
//alert($scope.coordinates);
// $scope.coordinates = gameService.coordinates();
// $scope.stateName = gameService.stateName();
 $scope.score = 0;


$scope.map = { 
	center: { latitude: 36.964645, longitude: -122.01523 }, 
	zoom: 18,
};

$scope.options = {
	mapTypeId: google.maps.MapTypeId.SATELLITE
};










$scope.addScore = function() {	
    if ($scope.userGuess.toLowerCase() === $scope.stateName){
	    $scope.score += 100;
	    alert("You got it right!")
    } else {
    	alert("Sorry Sucker")
    }
  $scope.userGuess = "";
}



}); // ends controller