(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('HomeController', HomeController)

    HomeController.$inject = ['$anchorScroll', '$location', '$http', '$rootScope', '$touch'];


    function HomeController($anchorScroll, $location, $http, $rootScope, $touch) {

        $touch.ngClickOverrideEnabled(true)

        var vm = this;
        var container = document.querySelectorAll('.mdl-tabs .mdl-tabs__panel');
        var tabBar = document.querySelectorAll('.mdl-tabs__tab-bar a');

        vm.ui = {
            "hr": {
                "TAB_ABOUT": "O TESLI",
                "TAB_EXP": "POKUSI",
                "TAB_BP": "NACRTI"
            },
            "en": {
                "TAB_ABOUT": "ABOUT TESLA",
                "TAB_EXP": "EXPERIMENTS",
                "TAB_BP": "BLUEPRINTS"
            }
        }

        vm.blueprints = [
            { id: "daljuprbrodom", name: { "hr": "Nacrt uređaja za daljinsko upravljanje brodom", "en": "Drawing of the ship's remote control device" }, imageUrl: "/tesla-lab/assets/blueprints/daljuprbrodom.png" },
            { id: "prelen", name: { "hr": "Nacrt uređaja za prijenos električne energije", "en": "Drawing of a mechanism for electric power transmission" }, imageUrl: "/tesla-lab/assets/blueprints/prelen.png" },
            { id: "rasvisfrstr", "name": { "hr": "Rasvjeta pomoću visokofrekvencijske struje", "en": "Drawing of an electric lighting system" }, imageUrl: "/tesla-lab/assets/blueprints/rasvisfrstr.png" },
            { id: "teslinaturbina", name: { "hr": "Teslina turbina", "en": "Drawing of the turbine" }, imageUrl: "/tesla-lab/assets/blueprints/teslinaturbina.png" },
            { id: "teslinazavojnica", "name": { "hr": "Teslina zavojnica", "en": "Tesla coil" }, imageUrl: "/tesla-lab/assets/blueprints/teslinazavojnica.png" }
        ];

        vm.experiments = [
            { id: "tt100k", name: { "hr": "Teslin transformator 100k volti", "en": "Tesla transformer 100k volts" }, imageUrl: "/tesla-lab/assets/tt100k.png" },
            { id: "okretnoEMP", name: { "hr": "Okretno magnetsko polje", "en": "Rotating magnetic field" }, imageUrl: "/tesla-lab/assets/okretnoEMP.png" },
            { id: "tt3M", name: { "hr": "Teslin transformator 3M volti", "en": "Tesla transformer 1M volts" }, imageUrl: "/tesla-lab/assets/tt3m.png" },
            { id: "bezicnastruja", name: { "hr": "Bežični prijenos EM titraja", "en": "Wireless transmission of EM oscillations" }, imageUrl: "/tesla-lab/assets/bezicni_prijenos.png" },
            { id: "faraday", name: { "hr": "Faradayev kavez", "en": "Faraday cage" }, imageUrl: "/tesla-lab/assets/faraday_kavez.png" }
        ];

        vm.jumpTo = function (id) {

            $location.hash("anchor" + id);
            $anchorScroll();
            $location.hash("");
        };

        vm.changeUrl = function (url) {
            $location.url(url);
        };

        $http.get("app/data/aboutTesla.json")
            .then(function (res) {
                vm.aboutTesla = res.data;
            });

        vm.swipeLeftTab = function () {
            var activeTab = document.querySelector('.mdl-tabs__tab-bar .is-active');
            var indexOfActiveTab = Array.prototype.indexOf.call(tabBar, activeTab);

            if (indexOfActiveTab == 0 || indexOfActiveTab == 1) {
                tabBar[indexOfActiveTab].className = 'mdl-tabs__tab';
                tabBar[indexOfActiveTab + 1].classList += ' is-active';
                container[indexOfActiveTab].className = 'mdl-tabs__panel';
                container[indexOfActiveTab + 1].classList += ' is-active';
                componentHandler.upgradeElements(angular.element(tabBar));
            }

        }

        vm.swipeRightTab = function () {
            var activeTab = document.querySelector('.mdl-tabs__tab-bar .is-active');
            var indexOfActiveTab = Array.prototype.indexOf.call(tabBar, activeTab);

            if (indexOfActiveTab == 2 || indexOfActiveTab == 1) {
                tabBar[indexOfActiveTab].className = 'mdl-tabs__tab';
                tabBar[indexOfActiveTab - 1].classList += ' is-active';
                container[indexOfActiveTab].className = 'mdl-tabs__panel';
                container[indexOfActiveTab - 1].classList += ' is-active';
                componentHandler.upgradeElements(angular.element(tabBar));
            }

        }


    }

})();
