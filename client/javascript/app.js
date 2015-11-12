angular.module("mainApp", [])
.controller('mainController', ["$http", "$scope", function($http, $scope){
  $scope.sendEmail=function(){
    
    $http({
      method: 'POST', 
      url: 'server/api/api.php?table=email', 
      data:$scope.email,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(function(response){
        console.log(response.data);
      }, function(){
        console.log('ERROR');
      });
    $scope.name="";
    $scope.email="";
  };

  $scope.getEmail=function(){
    $http({
      method: 'GET',
      url: 'server/api/api.php?table=email'
    })
      .then(function(response){
        console.log(response.data);
      });
  };

  $scope.deleteOne = function(){
    $http({
      method: "DELETE",
      url: "server/api/api.php?table=email",
      data: $scope.delete,
    })
      .then(function(response){
        console.log(response.data);
      });
  };
  $scope.findOne = function(){
    $http({
      method: 'GET',
      url: 'server/api/api.php?table=email&id='+$scope.delete.id
    })
    .then(function(response){
      console.log(response.data);
    });
  };

  
}]);