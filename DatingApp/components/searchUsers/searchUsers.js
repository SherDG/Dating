
define(['angular'], function (angular) {
	var component = {};
	component.init = function(){
		angular.module('app').controller('searchUsersController', ['$scope','profileService', function ($scope, profileService) {
		 
		  profileService.searchUser('Dima', 10).then(function(users){
		  	$scope.users = users;
		  });	
		}]);
	}
	return component;
});


