angular.module('locally.dashboard', ['ngMaterial'])
  .controller('progressController', function($scope, $interval) {
    $scope.progress = 0;
  })
  // Dashboard for businesses see campaigns
  .controller('dashboardController', function($scope, Campaign, Business, Customer) {
    $scope.data = {};
  })