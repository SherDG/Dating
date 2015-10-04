define(function (require) {

	var angular = require('angular');
	require('route');

	var app = angular.module('app', ['ngRoute']);
	app.init = function(){
	    var components = require('components/module');
		var controllers = require('controllers/ProfileService');
		// var directives = require('./directives/directives');
		debugger
		controllers.init();
		components.init();
		angular.bootstrap(document, ['app']);
	}

	app.controller('mainController', ['$scope',function ($scope) {
	 
	  console.log("mainController"); 
	  // profileService.searchUser('Dima', 10).then(function(users){
	  // $scope.users = users;
	  // });	
	}]);
	app.config(['$routeProvider',
	      function ($routeProvider) {
				$routeProvider
					.when('/', {
						templateUrl: '/main.html',
						controller: 'mainController'
					})
					.when('/index', {
						templateUrl: 'components/searchUsers/searchUsers.html',
						controller: 'searchUsersController'
					})
					.otherwise({
						redirectTo: '/'
					});
	      }
	  ]);
	return app;
});


