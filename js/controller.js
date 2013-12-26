(function(global, angular) {

'use strict';

var app = angular.module('ShenshuApp', []);

app.controller('ShenshuControl', function($scope) {
  $scope.lists = {
    tb: global.tb,
    sz: global.sz,
    zzh: global.zzh,
    mc: global.mc
  };
  $scope.list = 'tb';
  $scope.rows = [];
  $scope.error = false;

  $scope.update = function() {
    var i, s;
    $scope.rows.length = 0;
    if ($scope.input) {
      $scope.error = false;
      if ($scope.diff && $scope.num) {
        for (i = 0; i <= $scope.num; i++) {
          $scope.rows.push($scope.input + i * $scope.diff);
        }
      } else {
        if ($scope.lists[$scope.list][$scope.input]) {
          $scope.rows.push($scope.input);
        } else {
          $scope.error = true;
        }
      }
    }
  };
});

})(this, angular);
