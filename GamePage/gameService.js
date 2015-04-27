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




 
this.getMapView = function(coordinates) {
   var url = 'https://maps.googleapis.com/maps/api/streetview?size=5000x5000&location=' + coordinates;
   console.log(url);
   $http ({
   	method: 'GET',
   	url: url
   }).then(function(data) {
   	 console.log(data);
   })
   
 }//ends getRandomView*/

this.getMapView();
















})