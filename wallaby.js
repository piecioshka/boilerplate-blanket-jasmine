module.exports = function () {
    return {
        files: [
            // Firstly, load RequireJS.
            { pattern: 'app/scripts/vendor/require/require.js', instrument: false },

            // Secondly, load all other libraries.
            { pattern: 'app/scripts/vendor/**/*.js', instrument: false, load: false },

            // Next, load your application file.
            { pattern: 'app/scripts/core/app.js', load: false },

            // At last, load configuration your spec files.
            { pattern: 'test/unit/main.js', instrument: false }
        ],

        tests: [
            // Load all file with specs.
            { pattern: 'test/unit/spec/core/test.app.js', load: false }
        ]
    };
};
