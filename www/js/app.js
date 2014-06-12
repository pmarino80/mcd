// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('signin', {
    url: "/sign-in",
    templateUrl: "templates/sign-in.html",
    controller: 'SignInCtrl'
  })
  .state('forgotpassword', {
    url: "/forgot-password",
    templateUrl: "templates/forgot-password.html"
  })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html"
        }
      }
    })

    .state('app.lounge', {
      url: "/lounge",
      views: {
        'menuContent' :{
          templateUrl: "templates/lounge.html"
        }
      }
    })

    .state('app.reading-club', {
      url: "/reading-club",
      views: {
        'menuContent' :{
          templateUrl: "templates/reading-club.html"
        }
      }
    })

    .state('app.pending', {
      url: "/reading-club/pending",
      views: {
        'menuContent' :{
          templateUrl: "templates/pending.html"
        }
      }
    })

    .state('app.pending-details', {
      url: "/reading-club/pending/pending-details",
      views: {
        'menuContent' :{
          templateUrl: "templates/pending-details.html"
        }
      }
    })

    .state('app.manage-orders', {
      url: "/reading-club/manage-orders",
      views: {
        'menuContent' :{
          templateUrl: "templates/manage-orders.html"
        }
      }
    })

    .state('app.order-details', {
      url: "/reading-club/manage-orders/order-details",
      views: {
        'menuContent' :{
          templateUrl: "templates/order-details.html"
        }
      }
    })

    .state('app.review-order', {
      url: "/reading-club/review-order",
      views: {
        'menuContent' :{
          templateUrl: "templates/review-order.html"
        }
      }
    })

    .state('app.order-history', {
      url: "/reading-club/manage-orders/order-history",
      views: {
        'menuContent' :{
          templateUrl: "templates/order-history.html"
        }
      }
    })

    .state('app.wishlist', {
      url: "/reading-club/wishlist",
      views: {
        'menuContent' :{
          templateUrl: "templates/wishlist.html"
        }
      }
    })

    .state('app.club-contact', {
      url: "/reading-club/club-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/club-contact.html"
        }
      }
    })

    .state('app.club-faqs', {
      url: "/reading-club/club-faqs",
      views: {
        'menuContent' :{
          templateUrl: "templates/club-faqs.html"
        }
      }
    })

    .state('app.magazines', {
      url: "/magazines",
      views: {
        'menuContent' :{
          templateUrl: "templates/magazines.html"
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
	 $urlRouterProvider.otherwise("/sign-in");
  // $urlRouterProvider.otherwise('/app/playlists');
});


