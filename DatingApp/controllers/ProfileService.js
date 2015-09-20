var esServices= angular.module('app');

esServices.factory('profileService', ['$http', function($http) {
        return {
            searchUser: function(filter, itemCount){
                var requestData = {
                  filter: filter,
                  itemCount: itemCount,
                  test: 'text'
                };
                return $http({
                          url: '/profile', 
                          method: "GET",
                          params: requestData
                                    })
                .then(function(response){  				
        					console.log('sucsses');
                  return response.data;
        				},
        				function(reson){
        					console.log(reson);
        				});
                  }                  
               }    
}]);