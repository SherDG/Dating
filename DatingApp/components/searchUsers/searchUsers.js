
define(['angular', 'css!components/searchUsers/style'], function (angular) {
	var component = {};
	component.init = function(){
		angular.module('app').controller('searchUsersController', ['$scope','profileService', function ($scope, profileService) {
		 $scope.menuHide = true;
		 $scope.buttonClick = function (){
		 	if ($scope.menuHide){
		 	 $scope.menuHide = false;}
		 	else{
		 	 $scope.menuHide = true;
		 	 }
		 };

		  profileService.searchUser('Dima', 10).then(function(users){
		  	$scope.users = users;
		  });	
		}]);
	}
	return component;
});


