'use strict';

describe('Controller: RegisteradmincontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('interviewProbeFormApp'));

  var RegisteradmincontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisteradmincontrollerCtrl = $controller('RegisteradmincontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
