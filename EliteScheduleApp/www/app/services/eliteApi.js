(function() {

	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi]);

	function eliteApi($http, $q, $ionicLoading, CacheFactory) {
		
		var currentLeagueId;

                self.leaguesCache = CacheFactory.get("leaguesCache");
                self.leagueDataCache = CacheFactory.get("leagueDataCache");
       
                function getLeagues() {
                	var deferred = $q.defer(), 
                            cacheKey = "leagues",
                            leaguesData = self.leaguesCache.get(cacheKey);


                        if(leaguesData) {
                                console.log("Found data inside cache", leaguesData);
                                deferred.resolve(leaguesData);
                        } else {

                                $http.get("http://elite-schedule.net/api/leagues")
                                        .success(function(data) {
                                                console.log("Received data via HTTP");
                                                self.leaguesCache.put(cacheKey, data);
                                                deferred.resolve(data);
                                        })
                                        .error(function(){
                                                console.log("Error while making HTTP call.");
                                                deferred.reject();
                                        }
                                );        
                        }

                	

                	return deferred.promise;
                }

                function getLeagueData() {
                	var deferred = $q.defer(),
                            cacheKey = "leagueData-" + currentLeagueId, 
                            leagueData = self.leagueDataCache.get(cacheKey);

                        if(leagueData) {
                                console.log("Found data in the cache", leagueData);
                                deferred.resolve(leagueData);
                        } else {
                                $ionicLoading.show({template: "Loading ..."});

                                // Currently hard-coding the currentLeagueId value as currentLeagueId is undefined when running it.
                                $http.get("http://elite-schedule.net/api/leaguedata/2037")// + currentLeagueId)
                                        .success(function(data, status) {
                                                console.log("Received league data via HTTP", data, status);
                                                self.leagueDataCache.put(cacheKey, data);
                                                $ionicLoading.hide();
                                                deferred.resolve(data);
                                        })
                                        .error(function(){
                                                console.log("Error while making HTTP call.");
                                                $ionicLoading.hide();
                                                deferred.reject();
                                        }
                                );

                        }

                	
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