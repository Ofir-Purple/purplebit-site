
purplebit = angular.module('purplebit', []);


purplebit.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})