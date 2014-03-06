"use strict";

purplebit.controller('testimonialCtrl', function($scope, testimonialSrv) {
	console.log('hello');
	$scope.testimonials = testimonialSrv.testimonials;
})