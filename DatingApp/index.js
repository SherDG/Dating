// var angular = require('angular');
var route = require('angular-route');
// var app = angular.module('app', [route]);
// debugger
// var router = require('./controllers/router.js');


//https://github.com/angular-class/angular2-webpack-starter
//https://www.youtube.com/watch?v=RKqRj3VgR_c&list=PLw5h0DiJ-9PBiMeiBslHBZr2xUpx1aAUE
module.exports = angular.module('app', [route]).config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'searchUsersController', 
      templateUrl: 'components/searchUsers/searchUsers.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});;
var searchUsersController = require('./components/searchUsers/searchUsers.js');
// default params
function printMessage (status) {  
// let
  var message = 'ES6';                    
// template string           
  console.log(message);
}
printMessage(); 
