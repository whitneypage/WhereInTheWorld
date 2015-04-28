var app = angular.module('mapApp');

app.controller('loginCtrl', function($scope, loginService, $location, $firebaseObject, fb) {

  
  $scope.login = function() {
    loginService.login($scope.userEmail, $scope.userPassword)
    .then(function(data) {
     	$location.path('/game/' + data.uid);

    })
  }


  $scope.register = function() {
  	loginService.register($scope.userEmail, $scope.userPassword)
  	.then(function(data) {
      console.log(data);
  		alert("You did it! You registered! Please Log In!");
      var userRef= new Firebase(fb.url + '/users/' + data.uid);
      var user = $firebaseObject(userRef);

      user.userInfo = {
        email: $scope.userEmail,
        password: $scope.userPassword
      }
    user.$save();
  	})
  }
   
 

}); //ends controller


