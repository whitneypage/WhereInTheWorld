var app = angular.module('mapApp');

app.service('gameService', function($http, $q) {

	var places = [ 
 {
 	name: 'texas',
 	latitude: '30.274299',
 	longitude: '-97.742249'
 },
 {

   name: 'utah',
   latitude: '40.777258',
   longitude: '-111.888198'
 },
]




    for (var i = 0; i < places.length; i++) {
    	this.stateName = places[i].name;
        this.latitude = places[i].latitude;
        this.longitude = places[i].longitude;

    }
console.log(this.stateName);
console.log(this.latitude);
console.log(this.longitude);
























}); 