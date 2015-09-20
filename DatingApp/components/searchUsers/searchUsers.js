angular.module('app').controller('searchUsersController', ['$scope','profileService', function ($scope, profileService) {
 
  console.log("Test"); 
  profileService.searchUser('Dima', 10).then(function(users){
  $scope.users = users;
  });	
}]);


