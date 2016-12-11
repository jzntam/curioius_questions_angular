var awesomeAngular = angular.module('awesomeAngular', ['ngRoute', 'ngResource']);

awesomeAngular.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'javascripts/templates/home.html',
    controller: 'homeController'
  })
  .when('/question', {
    templateUrl: 'javascripts/templates/question.html',
    controller: 'questionController'
  })
});
