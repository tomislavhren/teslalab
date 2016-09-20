(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('AboutTeslaController', AboutTeslaController);

    AboutTeslaController.$inject = ['$routeParams', '$http', '$anchorScroll', '$location'];

    function AboutTeslaController($routeParams, $http, $anchorScroll, $location) {

        var vm = this;

        vm.jumpTo = function (id) {
            $location.hash("anchor" + id);
            $anchorScroll();
            $location.hash("");
        };

        $http.get("app/data/aboutTesla.json")
            .then(function (res) {
                vm.aboutTesla = res.data;
            });

    }

})();
