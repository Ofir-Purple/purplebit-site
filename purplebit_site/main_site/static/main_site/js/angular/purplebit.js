
purplebit = angular.module('purplebit', ['ngSanitize']);


purplebit.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})


// configuration variables
purplebit.service('configSrv', function() {

	// django static files prefix
	this.staticUrl = '/static/';
})