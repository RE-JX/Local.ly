angular.module('locally.dashboard', [])
  // Dashboard for businesses to choose campaign options
  .controller('dashboardController', function($scope, Campaign, Business, Customer) {
    $scope.data = {};
  })