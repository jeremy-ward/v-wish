angular.module("mainApp")
  .directive('navBar', function($location){
    return{
      restrict : "E",
      templateUrl: "client/views/templates/nav.html",
      link : function(scope){
        scope.links=[{
          name: 'Home',
          link: "#/",
        },{
          name: 'Events',
          link: "#/events"
        },{
          name: 'About',
          link: "#/about"
        },{
          name: 'Blog',
          link: "#/blog"
        }];
        scope.getActive=function(){
          return "#"+$location.path();
        };
      }
    };
  })
  .directive('footer', function(){
    return{
      restrict: 'E',
      templateUrl: "client/views/templates/footer.html"
    };
  })
  .directive('emailForm', function(){
    return{
      restrict: 'E',
      templateUrl: 'client/views/templates/emailForm.html'
    };
  })
  .directive('emailModal', function(){
    return{
      restrict: "E",
      templateUrl: 'client/views/templates/emailModal.html'
    };
  })
  .directive('infoDiv', function(){
    return{
      restrict: "E",
      templateUrl: 'client/views/templates/infoDiv.html'
    };
  });