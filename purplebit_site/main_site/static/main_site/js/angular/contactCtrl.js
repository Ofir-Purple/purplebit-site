
purplebit.controller('contactCtrl', function($scope) {

	$scope.contact = {};

	$scope.contact.name = undefined;
	$scope.contact.email = undefined;
	$scope.contact.message = undefined;

	// when input focus lost - try setting form pristine again
	$scope.tryPristine = function() {
		if ( ($scope.contact.name == undefined) && 
			($scope.contact.email == undefined) && 
			($scope.contact.message == undefined) ) {
			$scope.contactForm.$setPristine();
		}
	}

	// submit function
	$scope.submit = function() {

	}



})