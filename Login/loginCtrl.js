var app = angular.module('mapApp');

app.controller('loginCtrl', function($scope, loginService) {

  
  $scope.login = function(email, password) {
     loginService.login(email, password)
     .then(function(data) {

     })
     
  }

  $scope.register = function(email, password) {
  	loginService.register(email, password)
  	.then(function(data) {
  		alert("You did it! You registered! Please Log In")
  	})
  	
  }


}); //ends controller


