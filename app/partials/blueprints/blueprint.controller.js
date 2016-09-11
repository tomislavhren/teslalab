(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('BlueprintController', BlueprintController);

    BlueprintController.$inject = ['$location', '$http', '$routeParams'];

    function BlueprintController($location, $http, $routeParams) {
        var vm = this;
        vm.blueprint = {};

        $http.get("app/data/blueprints/" + $routeParams.id + ".json")
        .then(function (res) {
            vm.blueprint = res.data;
        });

    }


})();
