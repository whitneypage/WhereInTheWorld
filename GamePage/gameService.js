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
 {
 	name: 'alaska',
 	latitude:'63.059218',
 	longitude:'-151.369593'
 }
]

this.random;
this.getNewMap = function() {
  this.random = places[Math.floor(Math.random()*places.length)]
   console.log(this.random);
   return {
   	center: {
   		latitude: this.random.latitude,
   		longitude: this.random.longitude
   	},
   	zoom: 18
   }
}

this.delete = function(x) {
   for(var i = 0; i < places.length; i++){
   	if(places[i].name === x){
   		places.splice(i, 1);
   	}
   	console.log(places);
   }
}

this.getNewMap();

























}); 