(function() {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('navBackButton', navBackButton);

    navBackButton.$inject = ['$window'];
    
    function navBackButton($window) {

        var directive = {
            link: link,
            restrict: 'E',
            template: '<button type="button" class="nav-back-button mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">arrow_back</i></button>'
        };

        return directive;

        function link(scope, element, attrs) {
            element.on('click', function () {
                $window.history.back();
            });
        }
    }

})();