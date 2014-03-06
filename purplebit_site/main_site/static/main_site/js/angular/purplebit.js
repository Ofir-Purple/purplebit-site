
purplebit = angular.module('purplebit', ['ngSanitize']);


purplebit.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})