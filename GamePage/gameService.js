var app = angular.module('mapApp');

app.service('gameService', function($http, $q) {

	var places = [ 
 {
 	name: 'texas',
 	coordinates: '30.274299,-97.742249'
 },
 {

   name: 'utah',
   coordinates: '40.244626,-111.653326'
 },
]


var localObj = {};
this.coordinates = function() {
    for (var i = 0; i < places.length; i++) {
        localObj = places[i];
        return localObj.coordinates;
    }

}


this.stateName = function() {
    for (var i = 0; i < places.length; i++) {
       return places[i].name;
   }
};





















})