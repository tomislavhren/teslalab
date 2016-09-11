(function () {

    'use strict';

    angular
      .module('tesla-lab')
      .config(RouteConfig);

    RouteConfig.$inject = ['$locationProvider', '$routeProvider'];

    function RouteConfig($locationProvider, $routeProvider) {

        $routeProvider
          .when('/', {
              templateUrl: 'app/partials/main/main.html',
              controller: 'MainController'
          })
          .when('/home', {
              templateUrl: 'app/partials/home/home.html',
              controller: 'HomeController'
          })
          .when('/experiments/details/:id', {
              templateUrl: 'app/partials/experimentDetails/experimentDetails.html',
              controller: 'ExperimentDetailsController'
          })
          .when('/blueprints/details/:id', {
              templateUrl: 'app/partials/blueprints/blueprint.html',
              controller: 'BlueprintController'
          })
          .when('tesla-lab/quiz', {
              templateUrl: 'app/partials/quiz/quiz.html',
              controller: 'QuizController'
          }).otherwise('/');

        $locationProvider.html5Mode(true);
    }

})();
