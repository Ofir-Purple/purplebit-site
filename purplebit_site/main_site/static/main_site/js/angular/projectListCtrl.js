
angular.module('purplebit').controller('projectListCtrl', function($scope, $sanitize, projectDetailsSrv) {
	$scope.projects = projectDetailsSrv.projectStorage;

	// returns string of project images for data-image tag
	$scope.projectImages = function(projectId) {
		return $scope.projects[projectId].dataImages.join(",");
	}

	// send GA event on project click
	$scope.gaSendProject = function(ind) {
		ga('send', 'event', 'button', 'click', projectDetailsSrv.projectStorage[ind].title);
	}

})