
angular.module('purplebit', ['ngSanitize']);



// change angular default {{ to {$
angular.module('purplebit').config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
})


