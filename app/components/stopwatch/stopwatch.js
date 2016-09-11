(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('stopwatch', stopwatch);

    stopwatch.$inject = ['$interval'];

    function stopwatch($interval) {
        // Usage:
        //     <stopwatch></stopwatch>
        // Creates:
        // 
        var directive = {
            link: link,
            templateUrl: 'app/components/stopwatch/stopwatch.template.html',
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.i = 5;
            var t = "00:";
            var countdown;


            function timer() {
                scope.time = t + scope.i;
                scope.i--;

                if (scope.i < 10) {
                    t = "00:0";
                }

                if (scope.i == 0) {
                    scope.time = t + scope.i;
                    $interval.cancel(countdown);
                }
            }

            countdown = $interval(timer, 1000);

            scope.$on('$destroy', function () {
                $interval.cancel(countdown);
            });

        }
    }

})();