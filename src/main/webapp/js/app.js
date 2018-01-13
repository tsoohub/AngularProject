var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
  console.log("My Scope");

  $scope.newUser = {};
  $scope.clickedUser = {};

  $scope.users = [
		{username: "rimon", password: "Md. Mamunur Rashid Rimon", email:"rimonmath@gmail.com"},
		{username: "shamim", password: "Md. Tamim Hossain", email:"shamim@gmail.com"},
		{username: "tamim", password: "Tamim Iqbal", email:"tamim@gmail.com"}
	];

  $scope.saveUser = function() {
    $scope.users.push($scope.newUser);
  };

  $scope.selectedUser = function(user) {
    $scope.clickedUser = user;
  };

  $scope.updateUser = function() {
    
  };

  $scope.deleteUser = function() {
      $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
  };
});
