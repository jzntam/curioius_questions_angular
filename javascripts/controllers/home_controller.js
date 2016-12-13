awesomeAngular.controller('homeController',
  [
    '$scope',
    '$location',
    'QuestionsApiService',
    function ($scope, $location, QuestionsApiService) {
      $scope.question  = {};
      $scope.questions = QuestionsApiService.allQuestions();

      $scope.showQuestion = function(id) {
        $location.path('/question/' + id);
      }

      $scope.submit = function() {
        QuestionsApiService.createQuestion($scope.question)
          .$promise.then(
            function success(response) {
              console.log(response);
              $location.path('/question/' + response.id);
            },
            function failure(response) {
              console.log(response);
              handleErrors(response.data.errors.join(', '));
            }
          );
      };

      handleErrors = function(errors) {
        $scope.showErrors = true;
        $scope.errors     = errors;
      }
    }
  ]
);
