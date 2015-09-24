
(function searchUsersController(){
var app = angular.module('app');
var profileService = require('../../controllers/ProfileService.js')();
app.controller('searchUsersController', ['$scope', 'profileService', function ($scope, profileService) {
 
  console.log("Test"); 
  debugger
  profileService.searchUser('Dima', 10).then(function(users){
  $scope.users = users;
  });	
}]);
})();
// module.exports = searchUsersController; 


