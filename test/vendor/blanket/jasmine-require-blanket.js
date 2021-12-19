(function (root) {

    if (!root.jasmineRequire) {
        throw new Error('jasmineRequire library does not exist in global namespace!');
    }

    if (!root.blanket) {
        throw new Error('blanket library does not exist in global namespace!');
    }

    var jasmine = root.jasmineRequire.core(root.jasmineRequire);
    var blanket = root.blanket;

    /**
     * based on https://raw.github.com/larrymyers/jasmine-reporters/master/src/jasmine.junit_reporter.js
     */
    var BlanketReporter = function (savePath, consolidate, useDotNotation) {
        blanket.setupCoverage();
    };

    BlanketReporter.finished_at = null; // will be updated after all files have been written

    BlanketReporter.prototype = {
        specStarted: function (spec) {
            blanket.onTestStart();
        },

        specDone: function (result) {
            var passed = result.status === 'passed' ? 1 : 0;
            blanket.onTestDone(1, passed);
        },

        jasmineDone: function () {
            blanket.onTestsDone();
        },

        log: function (str) {
            var console = jasmine.getGlobal().console;

            if (console && console.log) {
                console.log(str);
            }
        }
    };

    // export public
    root.jasmineRequire.BlanketReporter = BlanketReporter;

    //override existing jasmine execute
    var originalJasmineExecute = jasmine.getEnv().execute;

    jasmine.getEnv().execute = function () {
        console.log('waiting for blanket...');
    };

    blanket.beforeStartTestRunner({
        checkRequirejs: true,
        callback: function () {
            jasmine.getEnv().addReporter(new jasmine.BlanketReporter());
            jasmine.getEnv().execute = originalJasmineExecute;
            jasmine.getEnv().execute();
        }
    });

}(this));
