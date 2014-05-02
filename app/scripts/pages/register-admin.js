/*!
* router.js
* Register admins
*
* @project   Interview Probe Form
* @date      27-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/

'use strict';

angular.module('interviewProbeFormApp')
  .controller('RegisterAdminCtrl', function ($scope, $http) {
    $scope.register = function () {
    	// registering an admin
    	$http({method: 'POST', url:'/registeradmin', data: this.user});
    }
  });
