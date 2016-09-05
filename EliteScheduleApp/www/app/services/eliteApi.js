(function() {

	'use strict';

	angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi]);

	function eliteApi($http, $q, $ionicLoading, CacheFactory) {
		
		
                self.leaguesCache = CacheFactory.get("leaguesCache");
                self.leagueDataCache = CacheFactory.get("leagueDataCache");


                self.leaguesCache.setOptions({

                        onExpire: function(key, value) {
                                getLeagues()
                                        .then(function() {
                                                console.log("Leagues Cache was automatically refreshed.");
                                        }, function() {
                                                console.log("Error getting data. Putting expired items back into the cache.", new Date());
                                                self.leaguesCache.put(key, value);
                                        });
                        }
                });

                self.leagueDataCache.setOptions({
                        onExpire: function(key, value) {
                                getLeagueData()
                                        .then(function() {
                                                console.log("League Data Cache was automatically refreshed.");
                                        }, function() {
                                                console.log("Error getting league data. Putting expired items back into the cache.", new Date());
                                                self.leagueDataCache.put(key, value);
                                        });
                        }
                });

                self.staticCache = CacheFactory.get("staticCache");

                function setLeagueId(leagueId) {
                        self.staticCache.put("currentLeagueId", leagueId);
                }

                function getLeagueId() {
                        var currentLeagueId = self.staticCache.get("currentLeagueId");
                        console.log("currentLeagueId", currentLeagueId)
                        return currentLeagueId;
                }
       
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

                function getLeagueData(forceRefresh) {
                        if(typeof forceRefresh === "undefined") {
                                forceRefresh = false; 
                        }
                	var deferred = $q.defer(),
                            cacheKey = "leagueData-" + getLeagueId(), 
                            leagueData = null; 
                        
                        if(!forceRefresh) { 
                                leagueData = self.leagueDataCache.get(cacheKey);
                        }

                        if(leagueData) {
                                console.log("Found data in the cache", leagueData);
                                deferred.resolve(leagueData);
                        } else {
                                $ionicLoading.show({template: "Loading ..."});

                                $http.get("http://elite-schedule.net/api/leaguedata/" + getLeagueId())
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

		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
			setLeagueId: setLeagueId
		};
	};
})();