define(function (require) {

	var angular = require('angular');
	require('route');

	var app = angular.module('app', ['ngRoute']);
	app.init = function(){
	    var components = require('components/module');
		var controllers = require('controllers/ProfileService');
		var directives = require('./directives/module');

		controllers.init();
		directives.init();
		components.init();
		angular.bootstrap(document, ['app']);
	}

	app.config(['$routeProvider',
	      function ($routeProvider) {
				$routeProvider
					.when('/', {
						templateUrl: 'components/main.html',
						controller: 'applicationController'
					})
					.when('/search', {
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


