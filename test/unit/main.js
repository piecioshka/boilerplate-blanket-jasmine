(function () {
    'use strict';

    var ENABLE_BLANKET = true;

    // Configure RequireJS to shim Jasmine
    require.config({
        paths: {
            core: '../../app/scripts/core',

            jasmine: '../vendor/jasmine-2.2.0/jasmine',
            'jasmine-html': '../vendor/jasmine-2.2.0/jasmine-html',
            blanket: '../vendor/blanket/blanket',
            'jasmine-require-blanket': '../vendor/blanket/jasmine-require-blanket',
            boot: '../vendor/jasmine-2.2.0/boot'
        },

        shim: {
            jasmine: { exports: 'window.jasmineRequire' },
            'jasmine-html': { deps: ['jasmine'], exports: 'window.jasmineRequire' },
            blanket: { deps: ['jasmine', 'jasmine-html'], exports: 'blanket' },
            'jasmine-require-blanket': { deps: ['jasmine', 'jasmine-html', 'blanket'], exports: 'window.blanket' },
            boot: { deps: ['jasmine-html', 'jasmine-require-blanket'], exports: 'window.jasmineRequire' }
        }
    });

    // Define all of your specs here. These are RequireJS modules.
    var specs = [
        'spec/core/test.app'
    ];

    // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
    // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
    // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
    // initialize the HTML Reporter and execute the environment.

    require(['boot'], function () {
        if (ENABLE_BLANKET) {
            // Add BlanketJS - code coverage reporter
            jasmine.getEnv().addReporter(new jasmineRequire.BlanketReporter());

            // Enable calculate code coverage on directories.
            blanket.options('filter', ['app/scripts/core/']);
        }

        // Load the specs
        require(specs, function () {
            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
}());
