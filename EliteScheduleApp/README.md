Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

	npm install -g ionic

Then run: 


	ionic start myProject tabs


More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.


## Commit Related
Commit 5d201bc305402f84b1e366db651b82a7885042e7 included running the following command

	bower install lodash --save-dev



## Angular Cache Overview

-	Angular-Cache is a replacement for Angular's $cacheFactory
-	Configurable TTL
-	Configurable storage options (e.g., Local Storage)
-	Expiration Events


## Angular Cache - Creating and Configuring

Ran the following command to install angular-cache:

	bower install angular-cache --save-dev
	
## Angular Cache - Implementing Caches

The angular-cache version the author used is out-of-date. Instead of using DSCacheFactory, I had to use CacheFactory. 	

