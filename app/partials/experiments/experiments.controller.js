(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('ExperimentsController', ExperimentsController);

    ExperimentsController.$inject = ['$routeParams', '$http', '$anchorScroll', '$location'];

    function ExperimentsController($routeParams, $http, $anchorScroll, $location) {

        var vm = this;

        vm.experiments = [
            { id: "tt100k", name: { "hr": "Teslin transformator 100k volti", "en": "Tesla transformer 100k volts" }, imageUrl: "/tesla-lab/assets/tt100k.png" },
            { id: "okretnoEMP", name: { "hr": "Okretno magnetsko polje", "en": "Rotating magnetic field" }, imageUrl: "/tesla-lab/assets/okretnoEMP.png" },
            { id: "tt3M", name: { "hr": "Teslin transformator 3M volti", "en": "Tesla transformer 1M volts" }, imageUrl: "/tesla-lab/assets/tt3m.png" },
            { id: "bezicnastruja", name: { "hr": "Bežični prijenos EM titraja", "en": "Wireless transmission of EM oscillations" }, imageUrl: "/tesla-lab/assets/bezicni_prijenos.png" },
            { id: "faraday", name: { "hr": "Faradayev kavez", "en": "Faraday cage" }, imageUrl: "/tesla-lab/assets/faraday_kavez.png" }
        ];


        vm.changeUrl = function (url) {
            $location.url(url);
        };

    }

})();
