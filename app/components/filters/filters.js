angular.module('myApp.filters', [])

    .filter('startFromFtr', function () {
        return function (input, start) {
            if (!input || !input.length) {
                return;
            }
            return input.slice(start);
        }
    });