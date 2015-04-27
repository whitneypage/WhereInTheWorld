var app = angular.module('mapApp', ['ngRoute', 'firebase', 'uiGmapgoogle-maps']);

app.constant('fb', {
  		url: 'https://where-in-the-world.firebaseIO.com'
	});

app.config(function($routeProvider) {

		$routeProvider
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'loginCtrl'
		})

		.when('/game', {
			templateUrl: 'gamepage/game.html',
			controller: 'gameCtrl'
		})



		.otherwise ({
			redirectTo: '/login'
		})




}); // ends app.config