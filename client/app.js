// All the Angular modules we'll be using, including premade as well as our own modules we've created for views on our app

angular.module('locally', [
    'locally.services',
    'locally.dashboard',
    'ngRoute',
    'ngMaterial'
  ])
  // This is an Angular Material Theme setting for color schemes
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo');
  })

  // This is where we are routing our views
  .config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/dashboard', {
      templateUrl: '/dashboard/dashboard.html',
    })

    // Right now the default page is set to the dashboard view
    .otherwise({
      redirectTo: '/dashboard'
    })
});
