angular.module('myApp').config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
	when('/',{
		templateUrl : 'views/login.html',
		controller : 'LoginController'
	})
	
	
}]);