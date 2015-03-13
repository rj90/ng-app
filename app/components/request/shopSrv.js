angular.module('myApp.shop-request', [])

    .service('shopSrv', function ($resource) {
        return $resource('data/:shopId.json', {}, {
            fetch: {
                method: 'GET'
            }
        });
    });