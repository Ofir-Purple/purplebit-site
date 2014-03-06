"use strict";

purplebit.controller('managersCtrl', function($scope, managementSrv) {
	$scope.managers = managementSrv.managers;
})