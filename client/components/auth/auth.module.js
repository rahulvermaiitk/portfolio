'use strict';

angular.module('weblioApp.auth', [
  'weblioApp.constants',
  'weblioApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
