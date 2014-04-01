
angular.module('purplebit', ['ngSanitize']);



// change angular default {{ to {$
angular.module('purplebit').config(function($interpolateProvider, $httpProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');

    // CSRF for AngularJS.
    // 
    // Django sets a cookie named csrftoken on the first GET request and 
    // expects a custom HTTP header X-CSRFToken on later POST/PUT/DELETE 
    // requests.
    //
    // Angular expects the cookie named XSRF-TOKEN and will do 
    // POST/PUT/DELETE requests with X-XSRF-TOKEN header
    //
    // So this is the way to make Angular work with Django.
    // link: http://stackoverflow.com/questions/18156452/
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
})

