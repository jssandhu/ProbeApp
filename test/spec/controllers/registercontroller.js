'use strict';

describe('Controller: RegistercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('interviewProbeFormApp'));

  var RegistercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistercontrollerCtrl = $controller('RegistercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
