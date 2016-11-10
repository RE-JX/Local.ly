angular.module('locally.campaigns', ['ngMaterial'])
  //this will be the controller to create new campaigns
  .controller('campaignsController', function($scope, Campaign, Business, Customer) {
    $scope.data = {};
  })
