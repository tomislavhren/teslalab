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
            .when('/abouttesla', {
                templateUrl: 'app/partials/aboutTesla/aboutTesla.html',
                controller: 'AboutTeslaController'
            })
            .when('/experiments', {
                templateUrl: 'app/partials/experiments/experiments.html',
                controller: 'ExperimentsController'
            })
            .when('/blueprints', {
                templateUrl: 'app/partials/blueprints/blueprints.html',
                controller: 'BlueprintsController'
            })
            .when('/experiments/details/:id', {
                templateUrl: 'app/partials/experimentDetails/experimentDetails.html',
                controller: 'ExperimentDetailsController'
            })
            .when('/blueprints/details/:id', {
                templateUrl: 'app/partials/blueprintDetails/blueprintDetails.html',
                controller: 'BlueprintDetailsController'
            })
            .when('/quiz', {
                templateUrl: 'app/partials/quiz/quiz.html',
                controller: 'QuizController'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }

})();
