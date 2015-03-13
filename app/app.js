'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'ui.bootstrap',
  'myApp.contact',
  'myApp.directives',
  'myApp.views',
  'myApp.services',
  'myApp.request',
  'myApp.modal',
  'myApp.filters'
]).
config( function($routeProvider, $resourceProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.defaults.withCredentials = true;
})
.run(function ($rootScope, commonSrv, $cookieStore) {
    $rootScope.common = commonSrv;
        if($cookieStore.get('logged')){
            $rootScope.common.access = true;
            $rootScope.common.user = $cookieStore.get('logged');
        }
        $rootScope._ = _;
})
