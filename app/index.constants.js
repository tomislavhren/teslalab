(function () {

    'use strict';

    angular
        .module('tesla-lab')
        .constant('$Geofence', {
            'location': {
                'FER': {
                    'lat': '45.8008118',
                    'long': '15.9710419'
                },
                'TMZ': {
                    'lat': '45.8036592',
                    'long': '15.9637277'
                },
                'SHP': {
                    'lat': '45.7970751',
                    'long': '15.9068438'
                }
            }
        })
        .constant('EnvMode', {
            'location': 'FER',
            'minDistance': '200',
            'release': false
        })
        .constant('API', {
            //'baseUrl' : 'http://localhost:58399/api'
            'baseUrl': 'https://teslalabpi.azurewebsites.net/api'
        });

})();