(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('BlueprintsController', BlueprintsController);

    BlueprintsController.$inject = ['$routeParams', '$http', '$anchorScroll', '$location'];

    function BlueprintsController($routeParams, $http, $anchorScroll, $location) {

        var vm = this;

        vm.blueprints = [
            { id: "daljuprbrodom", name: { "hr": "Nacrt uređaja za daljinsko upravljanje brodom", "en": "Drawing of the ship's remote control device" }, imageUrl: "/tesla-lab/assets/blueprints/daljuprbrodom.png" },
            { id: "prelen", name: { "hr": "Nacrt uređaja za prijenos električne energije", "en": "Drawing of a mechanism for electric power transmission" }, imageUrl: "/tesla-lab/assets/blueprints/prelen.png" },
            { id: "rasvisfrstr", "name": { "hr": "Rasvjeta pomoću visokofrekvencijske struje", "en": "Drawing of an electric lighting system" }, imageUrl: "/tesla-lab/assets/blueprints/rasvisfrstr.png" },
            { id: "teslinaturbina", name: { "hr": "Teslina turbina", "en": "Drawing of the turbine" }, imageUrl: "/tesla-lab/assets/blueprints/teslinaturbina.png" },
            { id: "teslinazavojnica", "name": { "hr": "Teslina zavojnica", "en": "Tesla coil" }, imageUrl: "/tesla-lab/assets/blueprints/teslinazavojnica.png" }
        ];

        vm.changeUrl = function (url) {
            $location.url(url);
        };
    }

})();
