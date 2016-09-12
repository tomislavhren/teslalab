(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('ExperimentDetailsController', ExperimentDetailsController);

    ExperimentDetailsController.$inject = ['$routeParams', '$http', '$anchorScroll', '$location'];

    function ExperimentDetailsController($routeParams, $http, $anchorScroll, $location) {

        var vm = this;
        vm.experiment = {};

        var videoContainer = document.getElementById("video-ripple");
        vm.gotoVideo = function ($event) {
            $location.hash('video-section');
            $anchorScroll();
            //console.log($event);
            //var x = "-" + $event.clientX + "px";
            //var y = "-" + $event.clientY + "px";
            //videoContainer.style.transformOrigin = x + " " + y;

            //videoContainer.className = "video-ripple in";

        };

        $http.get("app/data/" + $routeParams.id + ".json")
            .then(function (res) {
                vm.experiment = res.data;
                document.getElementById("ex-det-src").src = vm.experiment.videos[0];
                document.getElementById("videoplayer").load();
            });


    }

})();
