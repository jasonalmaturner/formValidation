var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {
	$scope.login = true;
	$scope.signup = false;
	$scope.loginToggle = function(){
		$scope.login = true;
		$scope.signup = false;
	}
	$scope.signupToggle = function(){
		$scope.signup = true;
		$scope.login = false;
	}

})