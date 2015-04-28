var app = angular.module('mapApp');

app.service('loginService', function(fb, $firebaseAuth) {

	var authObj = $firebaseAuth(new Firebase(fb.url));

	this.login = function(email, password) {
      return authObj.$authWithPassword({
       	email: email,
       	password: password
      }, function(error, authData) {
       	if(error){
       			console.log(error);
       	} else {
            console.log(authData);
       	}
    	})

	}; // ends login
    

  this.register = function(email, password) {
      return authObj.$createUser({
       	email: email,
       	password: password
      })

    } // ends register

   
}); // ends service 
