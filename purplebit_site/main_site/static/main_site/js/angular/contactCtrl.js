
angular.module('purplebit').controller('contactCtrl', function($scope, $http, $timeout) {

	$scope.contact = {};
	
	// set default form values
	var setDefaults = function() {
		$scope.contact.name = undefined;
		$scope.contact.email = undefined;
		$scope.contact.message = undefined;
	}

	setDefaults();

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

		$http.post('/path', 'data')

		.success(function(data, status, headers, config) {
			// on success
			console.log('success!');

		})

		.error(function(data, status, headers, config) {
			// on error
			console.log('error!');
		});

		// clear form after submit
		setDefaults();

		// set form pristine
		$scope.tryPristine();
	}


})