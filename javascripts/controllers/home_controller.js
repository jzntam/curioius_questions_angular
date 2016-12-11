awesomeAngular.controller('homeController',
  [
    '$scope',
    '$location',
    'QuestionsApiService',
    function ($scope, $location, QuestionsApiService) {
      $scope.questions = QuestionsApiService.allQuestions()

      $scope.submit = function() {
        QuestionsApiService.createQuestion($scope.question)
          .$promise.then(
            function success(response) {
              console.log(response)
              $location.path('/question')
            },
            function failure(response) {
              console.log(response)
            }
          );
      };
    }
  ]
);
