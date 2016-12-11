awesomeAngular.controller('homeController',
  [
    '$scope',
    '$location',
    function ($scope, $location) {
      $scope.submit = function(){
        $location.path('/question');
      };
    }
  ]
);
