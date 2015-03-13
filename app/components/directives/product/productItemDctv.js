angular.module('myApp.product', [])
    .directive('productItemDctv', function($timeout) {
        return {
            restrict: "E",
            templateUrl: "components/directives/product/product-item-tpl.html",
            scope: {
                data:"=",
                update:"&",
                delete:"&"
            },
            controller: function($scope){
                $scope.dataCopy = angular.copy($scope.data);

                $scope.$watch('dataCopy.price', function (newVal, oldVal) {
                    if (!angular.equals(newVal, oldVal)) {
                        $scope.$root.common.unsaved = true;
                        $timeout.cancel($scope.isTimeOut);
                        $scope.isTimeOut = $timeout(function () {
                            // aktualizuje model
                            $scope.data.price = +$scope.dataCopy.price;
                            // wysyłam request
                            $scope.update({item: $scope.data});
                        }, 1000);
                    }
                });
            },
            link: function(scope){

            }
        }
    })