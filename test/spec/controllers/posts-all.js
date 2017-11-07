'use strict';

describe('Controller: PostsAllCtrl', function () {

  // load the controller's module
  beforeEach(module('sa20App'));

  var PostsAllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsAllCtrl = $controller('PostsAllCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostsAllCtrl.awesomeThings.length).toBe(3);
  });
});
