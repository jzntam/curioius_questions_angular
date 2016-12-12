awesomeAngular.service('QuestionsApiService', function($resource) {
  var baseURL     = 'http://localhost:3000/api/v1/questions'
  var questionApi = $resource(baseURL);

  this.allQuestions = function(){
    return questionApi.query();
  }

  this.createQuestion = function(question) {
    return questionApi.save(question);
  }

  this.showQuestion = function(questionId) {
    var getQuestion = $resource(baseURL + '/:id', { id: '@id' });
    return getQuestion.get({ id: questionId });
  }
});
