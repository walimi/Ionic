(function() {

	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http',eliteApi]);

	function eliteApi($http) {
		
		var currentLeagueId;
       
        function getLeagues(callback) {
        	$http.get("http://elite-schedule.net/api/leaguedata")
        	.success(function(data) {
        		callback(data);
        	});
        }

        function getLeagueData(callback) {
        	debugger;
        	$http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
	        	.success(function(data, status) {
	        		console.log("Received league data via HTTP", data, status);
	        		callback(data);
	        	})
	        	.error(function(){
	        		console.log("Error while making HTTP call.");
	        	});
        }

        function setLeagueId(leagueId) {
        	debugger;
        	currentLeagueId = leagueId;
        }

		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
			setLeagueId: setLeagueId
		};
	};
})();