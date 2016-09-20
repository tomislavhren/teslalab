
(function() { 
    
    angular
    .module('tesla-lab')
    .directive('menuClose', function() {
        return {
            restrict: 'AC',
            link: function($scope, $element) {
                $element.bind('click', function() {
                    var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
                    var obs = angular.element(document.querySelector('.mdl-layout__obfuscator '));
                    if(drawer) {
                        drawer.toggleClass('is-visible');
                    }
                    if(obs) {
                        obs.toggleClass('is-visible');
                    }
                });
            }
        };
    });

})();