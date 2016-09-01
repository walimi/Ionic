(function() {

	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', eliteApi]);

	function eliteApi($http, $q, $ionicLoading) {
		
		var currentLeagueId;
       
        function getLeagues() {
        	var deferred = $q.defer();

        	$http.get("http://elite-schedule.net/api/leagues")
        	.success(function(data) {
        		deferred.resolve(data);
        	})
        	.error(function(){
        		console.log("Error while making HTTP call.");
        		deferred.reject();
        	});

        	return deferred.promise;
        }

        function getLeagueData() {
        	var deferred = $q.defer();

        	$ionicLoading.show({template: "Loading ..."});

        	// Currently hard-coding the currentLeagueId value as currentLeagueId is undefined when running it.
        	$http.get("http://elite-schedule.net/api/leaguedata/2037")// + currentLeagueId)
	        	.success(function(data, status) {
	        		console.log("Received league data via HTTP", data, status);
	        		$ionicLoading.hide();
        			deferred.resolve(data);
	        	})
	        	.error(function(){
	        		console.log("Error while making HTTP call.");
	        		$ionicLoading.hide();
	        		deferred.reject();
	        	});
        	return deferred.promise;
        }

        function setLeagueId(leagueId) {
        	currentLeagueId = leagueId;
        }

		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
			setLeagueId: setLeagueId
		};
	};
})();