angular.module("mainApp", [])
.controller('mainController', ["$http", "$scope", function($http, $scope){
  $scope.sendEmail=function(){
    
    $http({
      method: 'POST', 
      url: 'server/api/addOne.php?table=email', 
      data:$scope.email,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(function(response){
        console.log('sent okay');
        console.log(response.data);
      }, function(){
        console.log('there seems to be a problem');
      });
    $scope.name="";
    $scope.email="";
  };

  $scope.getEmail=function(){
    $http({
      method: 'GET',
      url: 'server/api/getAll.php?table=email'
    })
      .then(function(response){
        console.log(response.data);
      });
  };

  $scope.deleteOne = function(){
    $http({
      method: "POST",
      url: "server/api/deleteOne.php?table=email",
      data: $scope.delete,
    })
      .then(function(response){
        console.log(response);
      });
  };
  $scope.testMe = function(){
    console.log('testing');
    $http({
      method: 'GET',
      url: 'server/test.php'
    })
    .then(function(response){
      console.log(response);
    });
  };

  
}]);