(function() {
	'use strict';
	angular.module ('jerttit')
	.config (['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('jerttit',  {
					url: '/',
					templateUrl: '/views/jert.html',
					controller: 'jertCtrl',
					template: '<ui-view/>'
				})
				.state('jerttit.dashboard', {
					url: '/',
					templateUrl: '/views/dashboard.html',
					controller: 'dashboardCtrl'
				})
				.state('jerttit.subjert', {
					url: '/jerttits/:subId',
					templateUrl: '/views/subjert.html',
					controller: 'subjertCtrl'
				})
				.state('jerttit.profile', {
					url: '/users/:userId',
					templateUrl: '/views/profile.html',
					controller: 'profileCtrl'
				});
		}]);
})();