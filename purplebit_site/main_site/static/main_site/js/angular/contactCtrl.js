
angular.module('purplebit').controller('contactCtrl', function($scope, $http, $timeout) {

	$scope.contact = {};

	$scope.contactBtn = {
		message: 'Send Message',
		icon: 'icon-location-arrow'
	};
	
	// set default form values
	var setDefaults = function() {
		$scope.contact.name = undefined;
		$scope.contact.email = undefined;
		$scope.contact.message = undefined;
	};

	setDefaults();

	// when input focus lost - try setting form pristine again
	$scope.tryPristine = function() {
		if ( ($scope.contact.name == undefined) && 
			($scope.contact.email == undefined) && 
			($scope.contact.message == undefined) ) {
			$scope.contactForm.$setPristine();
		}
	};

	// submit function
	$scope.submit = function(contactUrl) {

		$http.post(contactUrl, $scope.contact)

		.success(function(data, status, headers, config) {

			$scope.contactBtn.message = 'Message Sent';
			$scope.contactBtn.icon = 'icon-ok';

			// on successful submit send GA event
			ga('send', 'event', 'form', 'submit', 'Contact');
			$timeout(function() {
				$scope.contactBtn.message = 'Send Message';
				$scope.contactBtn.icon = 'icon-location-arrow';
			}, 7000);

			// clear form after submit
			setDefaults();

			// set form pristine
			$scope.tryPristine();
		})
		.error(function(data, status, headers, config) {
			// on error
			$scope.contactBtn.message = 'Error';
			$scope.contactBtn.icon = 'icon-remove';
		});

		$scope.contactBtn.message = 'Sending...';
		$scope.contactBtn.icon = 'icon-refresh icon-spin';
	};
});
