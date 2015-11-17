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

  $scope.infoSections=[
    {
      title: 'Events',
      info : 'Checkout our upcoming events',
      link: "#/events"
    },{
      title: 'About Us',
      info : "Learn more about the purpose, mission and people of Virginia's Wish",
      link: "#/about"
    },{
      title: 'Blog',
      info : "Read about the difference we are making together",
      link: "#/blog"
    }
  ];

}]);