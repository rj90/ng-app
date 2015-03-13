module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/libs/angular/angular.js',
            'app/libs/angular-route/angular-route.js',
            'app/libs/angular-resource/angular-resource.js',
            'app/libs/angular-bootstrap/ui-bootstrap.js',
            'app/libs/angular-mocks/angular-mocks.js',
            'app/libs/angular-cookies/angular-cookies.min.js',
            'app/libs/ngmap/build/scripts/ng-map.min.js',
            'app/libs/ng-file-upload/angular-file-upload.min.js',
            'app/libs/underscore/underscore.js',
            'app/components/**/*.js',
            'app/views/**/*.js',
            'app/app.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        chromeOnly: true

    });
};