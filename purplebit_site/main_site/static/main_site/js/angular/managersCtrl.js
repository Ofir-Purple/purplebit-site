"use strict";

angular.module('purplebit').controller('managersCtrl', function($scope, managementSrv) {
	$scope.managers = managementSrv.managers;
})