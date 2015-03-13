/**
 * Created by student on 2015-03-12.
 */
angular.module('myApp.products-request', ['ngResource'])

    .service('productsSrv', function ($resource, $rootScope) {
        return $resource('http://js.edu.pl/api/' + 'news/:id', {id: "@id"}, {
            fetch: {
                method: 'GET'
            },
            fetchItem: {
                method: 'GET'
            },
            update: {
                method: 'PUT'
            },
            add: {
                method: 'POST'
            },
            delete: {
                method: 'DELETE'
            }
        });
    })