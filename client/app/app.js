'use strict';

var myapp = angular.module('weblioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeController'
      })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('home.about', {
        // we'll get to this in a bit
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutController'
      })

      .state('home.blog', {
        // we'll get to this in a bit
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'blogController'
      })

      .state('home.contact', {
        // we'll get to this in a bit
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'contactController'
      })

      .state('home.projects', {
        // we'll get to this in a bit
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'projectsController'
      })

      .state('home.calender', {
        // we'll get to this in a bit
        url: '/calender',
        templateUrl: 'app/calender/calender.html',
        controller: 'calenderController'
      })

      .state('home.gallery', {
        // we'll get to this in a bit
        url: '/gallery',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'galleryController'
      })
  });

