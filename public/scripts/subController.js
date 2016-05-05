(function() {
	angular.module('jerttit')
		.controller('subjertCtrl', subjertCtrl);
		subjertCtrl.$inject = ['$scope', '$stateParams'];

		function subjertCtrl($scope, $stateParams) {
			$scope.subId = $stateParams.subId;

		}
})();