awesomeAngular.service('QuestionsApiService', function($resource) {
  var questionApi = $resource('http://localhost:3000/api/v1/questions');

  this.allQuestions = function(){
    return questionApi.query();
  }

  this.createQuestion = function(question) {
    return questionApi.save(question);
  }

  this.showQuestion = function(question) {
    return questionApi.get(question);
  }
});
