
angular.module('purplebit', ['ngSanitize']);

// change angular default {{ to {$
angular.module('purplebit').config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})

angular.module('purplebit').constant('STATIC_URL', '{% static "" %}');


angular.module('purplebit').service('configSrv', function() {
	// django static files prefix
	this.staticUrl = '/static/';
})
