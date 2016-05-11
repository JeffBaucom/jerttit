(function() {
	angular.module('jerttit')
		.controller('NewJertCtrl', NewJertCtrl);

		NewJertCtrl.$inject = ['$scope', 'Jerts'];

		function NewJertCtrl($scope, Jerts) {
			$scope.newJert = {
				name : '',
				description : ''
			};
		}
})();