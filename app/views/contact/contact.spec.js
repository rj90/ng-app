describe('ContactCtrl', function () {

    beforeEach(module('myApp'));

    describe('sendMessage method', function(){

        it('should change scope.errorMsg when forms fields aren\'t filled', inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new();
            scope.contactForm = {};
            $controller('ContactCtrl', {$scope: scope});
            expect(scope.errorMsg).toBe(undefined);
            scope.sendMessage();
            expect(scope.errorMsg).toBe(true);
        }))

    })

})