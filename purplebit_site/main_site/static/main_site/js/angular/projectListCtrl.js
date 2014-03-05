
purplebit.controller('projectListCtrl', function($scope, projectDetails) {
	
	$scope.projects = projectDetails.projectStorage;
})