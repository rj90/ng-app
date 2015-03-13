angular.module('myApp.apiInterfaceSrv', [])
    .service('apiInterfaceSrv', function($rootScope, productsSrv, modalSrv){
        var apiInterface = {
            items:[],
            fetch: function() {
                productsSrv.fetch(function (dataResponse) {
                    apiInterface.items = dataResponse.data;
                })
            },
            add: function(){
                modalSrv.show('components/modal/modal-add-product-tpl.html', null, 'lm', function (model) {
                    var product = _.pick(model, 'title', 'description', 'price', 'img');
                    productsSrv.add(product, function (responseData) {
                        apiInterface.items.unshift(responseData.data);
                    });
                })
            },
            update: function (item) {
                productsSrv.update(item, function () {
                    $rootScope.common.unsaved = false;
                });
            },
            delete: function (item) {
                modalSrv.show('components/modal/modal-remove-product-tpl.html', null, 'sm', function (model) {
                    productsSrv.delete({id: item.id}, function(dataResponse){
                        if(dataResponse.status){
                            apiInterface.items = _.without(apiInterface.items, _.findWhere(apiInterface.items, {id: item.id}));
                            $timeout(function() {
                                alert('element: ' + item.title + ' został usunięty z powodu:\n' + model.reason);
                            })
                        }
                    })
                })

            }
        }

        return apiInterface;
    })