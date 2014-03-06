
purplebit.controller('projectListCtrl', function($scope, projectDetails) {
	
	$scope.projects = projectDetails.projectStorage;

	// returns string of project images for data-image tag
	$scope.projectImages = function(projectId) {
		return $scope.projects[projectId].dataImages.join(",");
	}

})