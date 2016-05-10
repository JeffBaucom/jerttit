(function() {
	'use strict';
	angular.module ('jerttit')
	.config (['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('dashboard',  {
					url: '/',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@dashboard' : {
							templateUrl: '../views/header.html',
							//controller: ''
						},
						'body@dashboard' : {
							templateUrl: '../views/dashboard/body.html',
							//controller: ''
						},
						'footer@dashboard' : {
							templateUrl: '../views/footer.html',
							//controller: ''
						}
					}
				})
				.state('subJerttit',  {
					url: '/jerts/:sub',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@subJerttit' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@subJerttit' : {
							templateUrl: '../views/subJerttit/body.html',
							controller: ''
						},
						'footer@subJerttit' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('subJerttitsList',  {
					url: '/jerts/:sub',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@subJerttitsList' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@subJerttitsList' : {
							templateUrl: '../views/subJerttitsList/body.html',
							controller: ''
						},
						'footer@subJerttitsList' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('newJert', {
					url: '/new/jert',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@newJert' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@newJert' : {
							templateUrl: '../views/newJert/body.html',
							controller: ''
						},
						'footer@newJert' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('newUser', {
					url: '/new/user',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@newUser' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@newUser' : {
							templateUrl: '../views/newUser/body.html',
							controller: ''
						},
						'footer@newUser' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('newPost', {
					url: '/jerts/:sub/new/post',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@newPost' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@newPost' : {
							templateUrl: '../views/newPost/body.html',
							controller: ''
						},
						'footer@newPost' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				})
				.state('viewPost', {
					url: '/jerts/:sub/:postId',
					views: {
						'' : {
							templateUrl: '/wrapper.html'
						},
						'header@viewPost' : {
							templateUrl: '../views/header.html',
							controller: ''
						},
						'body@viewPost' : {
							templateUrl: '../views/viewPost/body.html',
							controller: ''
						},
						'footer@viewPost' : {
							templateUrl: '../views/footer.html',
							controller: ''
						}
					}
				});
		}]);
})();