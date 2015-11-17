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