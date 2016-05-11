(function() {
	'use strict';
	angular.module ('jerttit')
	.config (['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('root',  {
					url: '',
					abstract: true,
					views: {
						'header' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'footer' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('root.dashboard', {
					url: '/',
					views: {
						'container@' : {
							templateUrl: '../views/dashboard.html',
							controller: ''
						}
					}
				})
				.state('root.jert', {
					url: '/j/:subId',
					views: {
						'container@' : {
							templateUrl: '',
							controller: ''
						}
					}
				})
				.state('root.jerts', {
					url: '/list',
					views: {
						'container@' : {
							templateUrl: '',
							controller: ''
						}
					}
				})
				.state('root.newJert', {
					url: '/new/jert',
					views: {
						'container@' : {
							templateUrl: '../views/newJert.html',
							controller: 'NewJertCtrl'
						}
					}
				})
				.state('root.newPost', {
					url: '/new/post',
					views: {
						'container@' : {
							templateUrl: '',
							controller: ''
						}
					}
				})
				.state('root.newUser', {
					url: '/new/user',
					views: {
						'container@' : {
							templateUrl: '',
							controller: ''
						}
					}
				})
				.state('root.viewPost', {
					url: '/j/:subId/:postId',
					views: {
						'container@' : {
							templateUrl: '',
							controller: ''
						}
					}
				});
		}]);
})();