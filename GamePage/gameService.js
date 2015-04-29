var app = angular.module('mapApp');

app.service('gameService', function($http, $q, $firebaseObject, fb, loginService) {

		var places = [
	 {
	 	name: 'alabama',
	 	latitude:'34.711198',
	 	longitude:'-86.655883'
	 },	 
	 {
	 	name: 'alaska',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'arizona',
	 	latitude:'36.105211',
	 	longitude:'-112.112161'
	 },
	 {
	 	name: 'arkansas',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'california',
	 	latitude:'36.964645',
	 	longitude:'-122.01523'
	 },
	 {
	 	name: 'colorado',
	 	latitude:'40.058849',
	 	longitude:'-105.655946'
	 },
	  {
	 	name: 'connecticut',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'delaware',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'florida',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'georgia',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'hawaii',
	 	latitude:'21.666100',
	 	longitude:'-158.050763'
	 },
	  {
	 	name: 'idaho',
	 	latitude:'44.049682',
	 	longitude:'-111.748731'
	 },
	  {
	 	name: 'illinois',
	 	latitude:'441.890876',
	 	longitude:'-87.609563'
	 },
	  {
	 	name: 'iowa',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'kansas',
	 	latitude:'38.917107',
	 	longitude:'-94.653904'
	 },
	  {
	 	name: 'kentucky',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'louisiana',
	 	latitude:'29.957237',
	 	longitude:'-90.062626'
	 },
	  {
	 	name: 'maine',
	 	latitude:'43.623066',
	 	longitude:'-70.208058'
	 },
	  {
	 	name: 'maryland',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'massachusetts',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'michigan',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'minnesota',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'mississippi',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	  {
	 	name: 'missouri',
	 	latitude:'39.084727',
	 	longitude:'-94.585433'
	 },
	  {
	 	name: 'montana',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'nebraska',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'nevada',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'newhampshire',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'newjersey',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'newmexico',
	 	latitude:'36.885932',
	 	longitude:'-105.621265'
	 },
	 {
	 	name: 'newyork',
	 	latitude:'40.689189',
	 	longitude:'-74.044489'
	 },
	 {
	 	name: 'northcarolina',
	 	latitude:'35.540609',
	 	longitude:'-82.552737'
	 },
	 {
	 	name: 'northdakota',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'ohio',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'oklahoma',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'oregon',
	 	latitude:'45.485543',
	 	longitude:'-123.979212'
	 },
	 {
	 	name: 'pennsylvania',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'rhodeisland',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'southcarolina',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'southdakota',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'tennessee',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	{
	 	name: 'texas',
	 	latitude: '32.805198',
	 	longitude: '-95.859709'
	 },
	 {

	   name: 'utah',
	   latitude: '40.225805',
	   longitude: '-111.661060'
	 },
	 {
	 	name: 'vermont',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'virginia',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'washington',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'westvirginia',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'wisconsin',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },
	 {
	 	name: 'wyoming',
	 	latitude:'61.264117',
	 	longitude:'-149.852596'
	 },

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
	   }
	}

	this.getNewMap();

	this.capitalize = function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	this.finalScore = 0;
    
   


/*this.states = [
Alabama,
Alaska,
Arizona,
Arkansas,
California,
Colorado,
Connecticut,
Delaware,
Florida,
Georgia,
Hawaii,
Idaho,
Illinois,
Indiana,
Iowa,
Kansas,
Kentucky,
Louisiana,
Maine,
Maryland,
Massachusetts,
Michigan,
Minnesota,
Mississippi,
Missouri,
Montana,
Nebraska,
Nevada,
New Hampshire,
New Jersey,
New Mexico,
New York,
North Carolina,
North Dakota,
Ohio,
Oklahoma,
Oregon,
Pennsylvania,
Rhode Island,
South Carolina,
South Dakota,
Tennessee,
Texas,
Utah,
Vermont,
Virginia,
Washington,
West Virginia,
Wisconsin,
Wyoming
];*/





















}); 