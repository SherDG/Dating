// var app  = require(".././index.js");
// var angular = require('angular');
(function router(){
  var app = angular.module('app'); 
  app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'searchUsersController', 
      templateUrl: 'components/searchUsers/searchUsers.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
})();
// module.exports = router;
