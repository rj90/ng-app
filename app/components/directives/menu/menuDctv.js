angular.module('myApp.menu', [])
    .directive('menuDctv', function ($http, /*$cookieStore,*/ modalSrv, $location, $cookieStore) {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: "components/directives/menu/menu-tpl.html",
            controller: function ($scope) {

                $scope.login = function () {
                    modalSrv.show('components/directives/menu/login-tpl.html', null, 'sm', function (model) {
                        $http.post($scope.$root.common.base + 'login/', {login: model.login, pass: model.pass})
                            .success(function (responseData) {
                                if (responseData.status) {
                                    $scope.$root.common.access = true;
                                    $scope.$root.common.user = responseData.user;
                                    $cookieStore.put('logged', responseData.user);
                                    //$location.path('products');
                                    alert('zalogowano pomyślnie');
                                }
                            })
                    });
                }
                //
                //!$cookieStore.get('logged') && $scope.login();
                //
                //$scope.logout = function () {
                //    $http.get($scope.$root.common.base + 'logout/')
                //        .success(function (responseData) {
                //            if (!!responseData.status) {
                //                $scope.$root.common.access = false;
                //                $cookieStore.remove('logged');
                //            }
                //        })
                //}
                //
                //$(document).on('click', '.navbar-collapse.in', function (e) {
                //    console.log('e', e.target);
                //    if ($(e.target).is('a') && !$(e.target).hasClass('dropdown-toggle')) {
                //        $(this).collapse('hide');
                //    }
                //});

            }
        }
    })