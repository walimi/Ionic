// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ngApp', ['ngCordova', 'ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "app/layout/menu.html"
      })

      .state('app.home', {
          url: "/home",
          views: {
              'menuContent': {
                templateUrl: "app/layout/home.html"
              }
          }
      })

      .state('app.dialogs', {
          url: "/dialogs",
          views: {
              'menuContent': {
                  templateUrl: "app/dialogs/dialogs.html"
              }
          }
      })
      
      .state('app.vibration', {
          url: "/vibration",
          views: {
              'menuContent': {
                  templateUrl: "app/vibration/vibration.html"
              }
          }
      })
      
      .state('app.network', {
          url: "/network",
          views: {
              'menuContent': {
                  templateUrl: "app/network/network.html"
              }
          }
      })
      
      .state('app.device', {
          url: "/device",
          views: {
              'menuContent': {
                  templateUrl: "app/device/device.html"
              }
          }
      })
      
      .state('app.camera', {
          url: "/camera",
          views: {
              'menuContent': {
                  templateUrl: "app/camera/camera.html"
              }
          }
      })
      
      .state('app.barcode-scanner', {
          url: "/barcode-scanner",
          views: {
              'menuContent': {
                  templateUrl: "app/barcode-scanner/barcode-scanner.html"
              }
          }
      });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('app/barcode-scanner');
});

