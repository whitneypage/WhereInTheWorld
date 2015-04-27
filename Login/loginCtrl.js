var app = angular.module('mapApp');

app.controller('loginCtrl', function($scope, loginService, $location) {

  
  $scope.login = function(email, password) {
     loginService.login(email, password)
     .then(function(data) {
     	$location.path('/game');

     })
     
  }

  $scope.register = function(email, password) {
  	loginService.register(email, password)
  	.then(function(data) {
  		alert("You did it! You registered! Please Log In!")
  	})
  	
  }


}); //ends controller


