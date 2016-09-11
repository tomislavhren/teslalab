(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .directive('scrolly', scrollPosition);

    scrollPosition.$inject = ['$window'];

    function scrollPosition($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var raw = element[0];
                var lastScroll = 0;
                console.log('loading directive | scroll position');

                element.bind('scroll', function () {
                    var tabs = document.getElementById('home-tabs');

                    if (tabs) {

                        var currentScroll = raw.scrollTop;
                        if (lastScroll > currentScroll) {
                            tabs.className = "mdl-tabs__tab-bar sticky-down";
                        } else {
                            tabs.className = "";
                            tabs.className = "mdl-tabs__tab-bar sticky-up";
                        }

                        lastScroll = currentScroll;

                    } else {
                        lastScroll = 0;
                    }

                });
            }
        };
    }
})();