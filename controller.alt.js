var app = angular.module('myModule');

app.controller('altController', function($scope, mainSrv) {

  $scope.info = mainSrv.getInfo();

});
