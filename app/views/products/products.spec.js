describe('ProductsCtrl', function () {
    var scope,
        $httpBackend,
        ctrl,
        data = {data:[1, 2, 3]};

    beforeEach(module('myApp'));
    beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET($rootScope.common.base + 'news/').respond(data);
        scope = $rootScope.$new();
        ctrl = $controller('ProductsCtrl', {$scope: scope});
    }));
    it('should fetch products list', function () {
        expect(angular.equals(scope.apiInterfaceSrv.items, [])).toBeTruthy();
        $httpBackend.flush();
        expect(angular.equals(scope.apiInterfaceSrv.items, data.data)).toBeTruthy();
    });
});