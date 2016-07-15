'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngAnimate',
  'ngDialog'
]).


config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'templates/portfolio.html'
            })
            .state('questionaire', {
                url: '/questionaire',
                templateUrl: 'templates/questionaireBlank.html'
            })
            .state('dictionarymode', {
                url: '/dictionarymode',
                templateUrl: 'templates/dictionarymode.html'
            })
            .state('research', {
                url: '/research',
                templateUrl: 'templates/research.html'
            })
            .state('researches', {
                url: '/researches',
                templateUrl: 'templates/researches.html'
            });
    }]);