
purplebit.controller('projectListCtrl', function($scope, $sanitize, projectDetailsSrv) {
	
	$scope.projects = projectDetailsSrv.projectStorage;

	// returns string of project images for data-image tag
	$scope.projectImages = function(projectId) {
		return $scope.projects[projectId].dataImages.join(",");
	}

})