define(['angular', "text!directives/SearchInput/SearchInput.html"], function (angular, template) {
	var directives = {};
	directives.init = function(){
		angular.module('app')
		.directive('searchInput', function() {
			return {
			   restrict: 'E',
			   transclude: true,
			   template: template,
			   controller: function($scope){
			        $scope.test ="test 111";
			    }
			 };
		});
	}
	return directives;
});