var angular = require('angular');
var route = require('angular-route');
var app = angular.module('app', [route]);
var router = require('./controllers/router.js');
var searchUsersController = require('./components/searchUsers/searchUsers.js');


module.exports = app;


