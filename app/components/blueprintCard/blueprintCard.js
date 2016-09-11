(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('blueprintCard', blueprintCard);

    blueprintCard.$inject = [];

    function blueprintCard() {

        var directive = {
            link: link,
            templateUrl: 'app/components/blueprintCard/blueprintCard.template.html',
            restrict: 'EA',
            scope: {
                id: '@bpId',
                name: '@bpName',
                imageUrl: '@bpImageUrl'
            }
        };

        return directive;

        function link(scope, element, attrs) {
        }
    }

})();