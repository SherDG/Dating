define(['angular'], function (angular) {
	var app = angular.module('app');
	app.config(function ($routeProvider) { 
	  $routeProvider 
	    // .when('/', { 
	    //   controller: 'searchUsersController', 
	    //   templateUrl: 'components/searchUsers/searchUsers.html' 
	    // }) 
	    .otherwise({ 
	      redirectTo: '/' 
	    }); 
	});
});
