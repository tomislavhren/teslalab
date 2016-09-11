(function () {
    'use strict';

    angular.module('tesla-lab')
    .run(ServiceWorkerConfig)
    //.run(GeofenceConfig)
    .run(SSLConfig);

    function ServiceWorkerConfig() {

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                     .register('/tesla-lab/sw.js')
                     .then(function () { console.log("Service Worker Registered"); })
                     .catch(function (err) {
                         // registration failed :(
                         console.log('ServiceWorker registration failed: ', err);
                     });;
        }
    }

    //GeofenceConfig.$inject = ['GeolocationService', '$rootScope', '$location'];

    //function GeofenceConfig(GeolocationService, $rootScope, $location) {


    //    $rootScope.$on("$routeChangeStart", function () {

    //        var res = GeolocationService.isValidLocation();
    //        res.then(function (isValid) {

    //            if (!isValid) {
    //                $location.path('/').search({ err: 'Potrebno je omogućiti lokaciju na pametnom uređaju.' });
    //            }

    //        });

    //    });

    //}

    SSLConfig.$inject = ['$location', 'EnvMode'];

    function SSLConfig($location, EnvMode) {

        if (EnvMode.release && ($location.$$protocol === 'http' || $location.$$protocol !== 'https')) {
            console.log('Redirecting to HTTPS.')
            window.location = "https://" + window.location.hostname + window.location.pathname + window.location.search;
        }

    }

})();