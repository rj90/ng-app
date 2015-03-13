angular.module('myApp.commonSrv', [])

    .service('commonSrv', function(){
            return {
                access: false,
                base:'http://js.edu.pl/api/'
            }
        })