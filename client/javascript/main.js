(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("mainApp", ['ngRoute'])
  .config([ '$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider){
      $routeProvider.
      when('/', {
        templateUrl : "client/views/home.html",
        controller: 'homeController'
      }).
      when('/events', {
        template: '<h1>Event Page</h1>'
      }).
      when('/about', {
        template: '<h1>About Page</h1>'
      }).
      when('/blog', {
        template: '<h1>Blog</h1>'
      }).
      otherwise({
        redirectTo : "/"
      });
       /*// use the HTML5 History API if allowed by browser
      if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }//*/
  }]);

require('./directives/directives');
require('./controllers/homeController');
},{"./controllers/homeController":2,"./directives/directives":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
