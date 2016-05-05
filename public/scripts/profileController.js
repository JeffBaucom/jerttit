(function() {
	angular.module('jerttit')
		.controller('profileCtrl', profileCtrl);
		profileCtrl.$inject = ['$scope', '$stateParams'];

		function profileCtrl($scope, $stateParams) {
			$scope.userId = $stateParams.userId;
		}
})();