(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location', '$scope', '$rootScope', '$timeout'];

    function IndexController($location, $scope, $rootScope, $timeout) {

        var vm = this;
        $scope.showBackArrow = false;

        $rootScope.culture = navigator.language == "en" 
                                || navigator.language == "hr" ? navigator.language : "hr";

        $scope.$on("$routeChangeStart", function () {
            $rootScope.active = true;
        });

        $scope.$on("$routeChangeSuccess", function (angularEvent, current, previous) {
            $timeout(function () { $rootScope.active = false; }, 300);
            if (current && current.$$route.originalPath === '/') {
                $scope.showBackArrow = false;
            } else {
                $scope.showBackArrow = true;
            }
        });

        $rootScope.setCulture = function (culture) {
            $rootScope.culture = culture;
        }

    }




})();
