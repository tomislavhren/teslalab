(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .config(HttpProviderConfig);

    HttpProviderConfig.$inject = ['$httpProvider'];

    function HttpProviderConfig($httpProvider) {
        $httpProvider.defaults.timeout = 5000;
    }
    


})();