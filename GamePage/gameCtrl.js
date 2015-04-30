var app = angular.module('mapApp');

app.controller('gameCtrl', function($scope, gameService, $timeout, $location, $rootScope) {

//$scope.coordinates = chance.coordinates().replace(/,/g, '').split(" ");
//console.log($scope.coordinates);

 //var lat = $scope.coordinates[0]  
 //var long = $scope.coordinates[1]

	$scope.score = 0;
	$scope.counter = 5;
    $scope.finalScore;

	$scope.map = {
		center: { 
			latitude:gameService.random.latitude,
			longitude:gameService.random.longitude
		}, 
		zoom: 17
	};
	

	$scope.options = {
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControl: false,
		minZoom: 11,
		overviewMapControlOptions: google.maps.ControlPosition.BOTTOM_LEFT		
	};

	

	$scope.addScore = function() {	
		$scope.userGuess = $scope.userGuess.toLowerCase().replace(/\s+/g, '');
	    if ($scope.userGuess === gameService.random.name){
	    	console.log($scope.userGuess);
		    $scope.score += 100;
		    alert("You got it right!");
		    gameService.delete($scope.userGuess);
		    $scope.map = gameService.getNewMap();
		    console.log($scope.map);
	    } else {
    		var rightAnswer = gameService.capitalize(gameService.random.name);
    		alert("Sorry Sucker, it was " + rightAnswer + "!");
    		$timeout(function(){
    			$scope.map = gameService.getNewMap();
    		});
    	} 

    	if($scope.counter === 1) { 
			//$scope.score = $scope.finalScore;
			gameService.finalScore = $scope.score;
			$location.path('/score')
		} 
  		$scope.userGuess = "";
  		$scope.counter --;
  		
	} // ends add score

	

	$scope.statesArr = gameService.states;

}); // ends controller