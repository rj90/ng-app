angular.module('myApp.input', [])
    .directive('inputDctv', function() {
        return {
            restrict: "E",
            templateUrl: "components/directives/input/input-tpl.html",
            transclude: true,
            scope: {
                type: "@",
                required: "=",
                model: "=",
                errorMsg: "="
            }
        }
    })