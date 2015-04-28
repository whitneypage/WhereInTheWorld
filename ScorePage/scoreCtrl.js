var app = angular.module('mapApp');

app.controller('scoreCtrl', function($scope, $location, gameService, loginService, fb, $firebaseArray) {


$scope.finalScore = gameService.finalScore;
$scope.bestScore;


var userId = loginService.getUid();
console.log(userId);

var gameRef = new Firebase(fb.url + '/game/' + userId)
$scope.game = $firebaseArray(gameRef);

$scope.game.$add({
  score: $scope.finalScore
}) 



var scoreArr = [];

$scope.getBestScore = function() {
	var scoresRef = new Firebase(fb.url + '/game/' + userId)

scoresRef.on("value", function(data) {
	scoreArr = data.val();
	console.log(scoreArr.score);

})
	$scope.bestScore = Math.max.apply(Math, scoreArr);
	return $scope.bestScore;
}

$scope.getBestScore();























}); // ends controller