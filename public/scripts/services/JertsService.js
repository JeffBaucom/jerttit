(function() {
	angular.module('jerttit')
	.factory('Jerts', Jerts);

	Jerts.$inject = ['$http'];

	function Jerts($http) {

		return {
			getJerts : getJerts,
			getJert : getJert,
			postJert : postJert
		};

		function getJerts() {
			return $http.get('api/jerts/')
				.then(getJertsComplete)
				.catch(getJertsFailed);

			function getJertsComplete(response) {
				return response.data.results;
			}

			function getJertsFailed(error) {
				console.log(error.data);
			}
		}

		function getJert(url) {

		}

		function postJert(newJert) {
			return $http.post('api/jerts/')
		}
		
	}
})();