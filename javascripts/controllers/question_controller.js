awesomeAngular.controller('questionController',
  [
    '$scope',
    '$routeParams',
    'QuestionsApiService',
    function($scope, $routeParams, QuestionsApiService) {
      var questionId = $routeParams.id

      QuestionsApiService.showQuestion(questionId)
        .$promise.then(
          function success(response) {
            $scope.question = response
          },
          function failure(response) {
            console.warn(response)
          }
        );
    }
  ]
);
