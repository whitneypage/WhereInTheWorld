var app = angular.module('mapApp', ['ngRoute', 'firebase']);

app.constant('fb', {
  		url: 'https://where-in-the-world.firebaseIO.com'
	});

app.config(function($routeProvider) {

		$routeProvider
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'loginCtrl'
		})



		.otherwise ({
			redirectTo: '/login'
		})




}); // ends app.config