
	var app = angular.module('MyApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})

			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			});
	});


	app.controller('mainController', function($scope) {

		$scope.message = 'This is Home Page';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Now You are visiting the About page';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! ';
	});