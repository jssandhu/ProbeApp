'use strict';

describe('Controller: RegisterAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('interviewProbeFormApp'));

  var RegisterAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterAdminCtrl = $controller('RegisterAdminCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
