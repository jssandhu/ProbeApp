/*!
* app.js
* Angular.js router and configuration
*
* @project   Interview Probe Form
* @date      11-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/

'use strict';

angular.module('interviewProbeFormApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register',{
        templateUrl: '/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/registeradmin',{
        templateUrl: '/register-admin.html',
        controller: 'RegisterAdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
