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

## Launching the Application in a Browser

To launch the application in a browser type the following command from where the application is:

	ionic serve

This command will launch the Google Chrome browser and display the application. Note that you may need to run the command as `sudo` when using Mac OS X.

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

## Mapping

### Overview
-	Google Maps for Angular - Introduction
-	Installation and Setup
-	Implementation
-	Markers
-	Driving Directions

### Google Maps for Angular

-	Angular-friendly Google Maps
-	Markers and Labels
-	Center/Zoom
-	Layers
-	Polylines/Circles/Polygons
-	Events

### Installing Google Maps for Angular

To install Google Maps for Angular run the following command. Note that I had to install version 1.1.8 of the Google Maps package. When I installe latest version I ran into issues. 

	bower install angular-google-maps#1.1.8 --save-dev
	
	
### Driving Directions

For driving directions functionality to work you need to deploy the app to an actual phone. Using it through the browser does not work.


## Customizing Ionic

-	Custom markdown directive
-	Customizing with CSS
-	SASS
-	App Metadata and Icons

### Custom Markdown Directive 

The most common JavaScript directive library to use when dealing with Markdown is called Showdown. Install the Showdown JavaScript library by runnig the following bower command:

	bower install showdown#0.3.1 --save-dev
	
Note that we're installing `v.0.3.1` of the library. 

### SASS Overview

-	CSS Pre-processing
-	Variables
-	Nesting
-	Partials
-	Mixins
-	... and more!	




