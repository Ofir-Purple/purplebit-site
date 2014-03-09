"use strict";

angular.module('purplebit').controller('testimonialCtrl', function($scope, testimonialSrv) {
	$scope.testimonials = testimonialSrv.testimonials;
})