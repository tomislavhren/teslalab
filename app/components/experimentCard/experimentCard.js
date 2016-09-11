(function() {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('experimentCard', experimentCard);

    experimentCard.$inject = [];
    
    function experimentCard () {

        var directive = {
            link: link,
            templateUrl: 'app/components/experimentCard/experimentCard.template.html',
            restrict: 'EA',
            scope: {
                id: '@exId',
                name: '@exName',
                imageUrl: '@exImageUrl'
            }
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();