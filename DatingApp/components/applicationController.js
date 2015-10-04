define(['angular'], function (angular) {
    var component = {};
    component.init = function(){
      angular.module('app').controller('applicationController', ['$scope', '$location', function($scope, $location) {

        console.log("user login");//TODO: create login
        $location.path("/search"); 
      }]);
    }
    return component; 
});