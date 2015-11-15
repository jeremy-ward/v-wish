angular.module('mainApp')
.controller('homeController',["$http", '$scope', function($http, $scope){
  $scope.submitEmail=function(){
    
    //validate email field first

    $scope.lastName = $scope.user.name;
    $http({
      method: "POST",
      url: "server/api/api.php?table=email",
      data: $scope.user,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
    }).
      then(function(response){
        console.log(response.data);
      }, function(){
        console.log('Algo Mal Paso!');
      });
    $scope.user={};
  };
}]);