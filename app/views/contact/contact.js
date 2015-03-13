angular.module('myApp.contact', [])

    .config(function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'views/contact/contact-tpl.html',
            controller: 'ContactCtrl'
        });
    })

    .controller('ContactCtrl', function ($scope) {
        $scope.sendMessage = function () {
            if ($scope.contactForm.$valid) {
                $scope.sentMsg = true;
                $scope.errorMsg = false;
                $scope.user = {};
            } else {
                $scope.errorMsg = true;
            }
        };
    });