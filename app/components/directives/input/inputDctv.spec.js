describe('inputDctv', function () {
    beforeEach(module('myApp'));
    it('should set transclude and display error according to errorMsg', inject(function (_$httpBackend_, $compile, $rootScope) {
            $httpBackend = _$httpBackend_;
            var scope = $rootScope.$new();
            var elem = angular.element("<input-dctv error-msg='true'>Twoje imię</input-dctv>");
            $compile(elem)(scope);
            $httpBackend.expectGET('components/directives/input/input-tpl.html')
                .respond("<div ng-transclude></div><small ng-if='errorMsg'>required</small>");
            $httpBackend.flush();
            expect(elem.find('span').html().trim()).toEqual('Twoje imię');
            expect(elem.find('small').length).toEqual(1);
            elem.find('div').scope().errorMsg = false;
            scope.$digest();
            expect(elem.find('small').length).toEqual(0);
        })
    );
});