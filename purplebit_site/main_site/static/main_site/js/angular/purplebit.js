
purplebit = angular.module('purplebit', ['ngSanitize']);

// change angular default {{ to {$
purplebit.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})


//purplebit.constant('STATIC_URL', "{% static %}" );


// configuration variables
purplebit.service('configSrv', function() {

	// django static files prefix
	this.staticUrl = '/static/';
})