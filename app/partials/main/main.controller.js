(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('MainController', MainController);

    MainController.$inject = ['$Geofence', '$scope', '$routeParams', '$rootScope'];

    function MainController($Geofence, $scope, $routeParams, $rootScope) {
        var vm = this;
        vm.error = "";
        vm.isValid = true;

        vm.ui = {
            "hr": {
                "BTN_MORE" : "Saznaj više",
                "BTN_QUIZ" : "Zaigraj kviz"
            },
            "en": {
                "BTN_MORE" : "Find out more",
                "BTN_QUIZ" : "Play quiz"
            }
        };

        componentHandler.upgradeElements(document.querySelector('.main-container .continue'));

        if ($routeParams.err) {
            vm.error = $routeParams.err;
            vm.isValid = false;
        }

    }

})();
