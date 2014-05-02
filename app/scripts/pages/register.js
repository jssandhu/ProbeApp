/*!
* register.js
* Registering an candiate
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
  .controller('RegisterCtrl', function ($scope, $http) {
    	$scope.register = function () {
			$http({method: 'POST', url: '/register', data: this.user});
		}
	});