angular.module('myApp.shop', ['ngMap'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/shops/:shopId', {
                templateUrl: "views/shop/shop-tpl.html",
                controller: "ShopCtrl"
            });
    })

    .controller('ShopCtrl', function ($scope, $routeParams, shopSrv) {

        $scope.$on('mapInitialized', function (evt, evtMap) {

            shopSrv.fetch({shopId: $routeParams.shopId}, function (responseData) {
                $scope.data = responseData.data;
                $scope.map.setZoom(6);
                $scope.map.setOptions({
                    draggable: false,
                    zoomControl: true,
                    scrollwheel: true,
                    disableDoubleClickZoom: true
                });
                setMarker($scope.data);
            });

        });

        function setMarker(data) {
            var marker = new google.maps.Marker({
                title: data.name
            });
            // długość i szerokość geograficzna
            var lat = data.position.lat;
            var lng = data.position.lng;
            var loc = new google.maps.LatLng(lat, lng);
            marker.setPosition(loc);
            marker.setMap($scope.map);
        }

    });