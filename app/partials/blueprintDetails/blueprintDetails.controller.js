(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('BlueprintDetailsController', BlueprintDetailsController);

    BlueprintDetailsController.$inject = ['$location', '$http', '$routeParams'];

    function BlueprintDetailsController($location, $http, $routeParams) {
        var vm = this;
        vm.blueprint = {};

        $http.get("app/data/blueprints/" + $routeParams.id + ".json")
        .then(function (res) {
            vm.blueprint = res.data;
        });

    }


})();
