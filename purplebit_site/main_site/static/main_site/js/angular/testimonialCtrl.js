"use strict";

purplebit.controller('testimonialCtrl', function($scope, testimonialSrv) {
	$scope.testimonials = testimonialSrv.testimonials;
})