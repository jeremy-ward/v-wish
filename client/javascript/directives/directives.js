angular.module("mainApp")
  .directive('navBar', function(){
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
        scope.setActive=function(name){
          scope.activeLink = name;
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
  });