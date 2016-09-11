(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .factory('GeolocationService', GeolocationService);

    GeolocationService.$inject = ['$Geofence', '$q', 'EnvMode'];

    function GeolocationService($Geofence, $q, EnvMode) {
        var service = {};


        function getDistanceFromLatLonInKm(crds) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(crds.lat2 - crds.lat1);  // deg2rad below
            var dLon = deg2rad(crds.lon2 - crds.lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(crds.lat1)) * Math.cos(deg2rad(crds.lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d * 1000;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

        service.getUserLocation = function () {

            var deffered = $q.defer();

            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;

                var userLocation = {
                    lat: crd.latitude,
                    long: crd.longitude
                };

                deffered.resolve(userLocation);
            }

            function error(err) {
                deffered.reject('ERROR(' + err.code + '): ' + err.message);
            }

            navigator.geolocation.getCurrentPosition(success, error, options);

            return deffered.promise;

        };

        service.isValidLocation = function () {
            var deffered = $q.defer();

            service.getUserLocation().then(function (userLocation) {

                var params = {
                    lat1: userLocation.lat,
                    lon1: userLocation.long,
                    lat2: $Geofence.location[EnvMode.location].lat,
                    lon2: $Geofence.location[EnvMode.location].long
                };

                var distance = getDistanceFromLatLonInKm(params);

                var valid = distance < EnvMode.minDistance ? true : false;

                deffered.resolve(valid);
            });

            return deffered.promise;

        };

        return service;
    }

})();