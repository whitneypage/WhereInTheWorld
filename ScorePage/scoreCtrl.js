var app = angular.module('mapApp');

app.controller('scoreCtrl', function($scope, $location, gameService, loginService, fb, $firebaseArray) {


	$scope.finalScore = gameService.finalScore;
//$scope.bestScore = gameService.getBestScore();


	var userId = loginService.getUid();
	console.log(userId);

	var gameRef = new Firebase(fb.url + '/game/' + userId)
	$scope.game = $firebaseArray(gameRef);

	$scope.game.$add({
  		score: $scope.finalScore
	})

	$scope.game.$loaded().then(function(data) {
		console.log(data);
		var scoreArr = [];
	
		for (var i = 0; i < data.length; i++) {
			scoreArr.push(data[i].score);
		
		};
	
		console.log(scoreArr);
		$scope.bestScore = Math.max.apply(Math, scoreArr);
	})

	$scope.playAgain = function() {
		$location.path('/game/' + userId);
	}




























}); // ends controller