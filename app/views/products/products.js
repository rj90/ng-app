'use strict';

angular.module('myApp.products', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/products', {
            templateUrl: 'views/products/products-tpl.html',
            controller: 'ProductsCtrl'
        });
    }])

    .controller('ProductsCtrl', function($scope, apiInterfaceSrv) {
        $scope.apiInterfaceSrv = apiInterfaceSrv;
        apiInterfaceSrv.fetch();

        $scope.paginationSettings = {
            currentPage: 1,
            itemsPerPage: 5,
            maxSize: 5
        }
    }
    );