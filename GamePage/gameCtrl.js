var app = angular.module('mapApp');

app.controller('gameCtrl', function($scope, gameService) {

//$scope.coordinates = chance.coordinates().split(' ').join('');
//alert($scope.coordinates);
$scope.coordinates = gameService.coordinates();
$scope.stateName = gameService.stateName();
$scope.score = 0;
$scope.map;

$scope.getMapView = function() {
 return gameService.getMapView($scope.coordinates);
}





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