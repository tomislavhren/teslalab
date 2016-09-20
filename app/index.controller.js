(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location', '$scope', '$rootScope', '$timeout'];

    function IndexController($location, $scope, $rootScope, $timeout) {

        var vm = this;
        $scope.showBackArrow = false;

        componentHandler.upgradeElements(document.querySelector('.mdl-layout.mdl-js-layout'));

        $rootScope.culture = navigator.language == "en"
            || navigator.language == "hr" ? navigator.language : "hr";

        $scope.$on("$routeChangeStart", function () {
            $rootScope.active = true;
        });

        $rootScope.ui = {
            "hr": {
                "BTN_HOME": "NASLOVNICA",
                "BTN_ABOUT": "O TESLI",
                "BTN_EXP": "POKUSI",
                "BTN_BP": "NACRTI"
            },
            "en": {
                "BTN_HOME": "HOME",
                "BTN_ABOUT": "ABOUT TESLA",
                "BTN_EXP": "EXPERIMENTS",
                "BTN_BP": "BLUEPRINTS"
            }
        };

        $rootScope.setCulture = function (culture) {
            $rootScope.culture = culture;
        }

    }




})();
