(function() {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('mdlUpgrade', mdlUpgrade);

    mdlUpgrade.$inject = ['$rootScope', '$timeout'];
    
    function mdlUpgrade ($rootScope, $timeout) {
        // Usage:
        //     <mdlUpgrade></mdlUpgrade>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
                var main = document.querySelectorAll('div[ng-view]');
                $rootScope.$on('$viewContentLoaded', function () {
                    $timeout(function () {
                        componentHandler.upgradeElements(main);
                    });
                });
        }
    }

})();