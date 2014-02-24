(function (root, factory) {
    // Browser globals
    factory(root);
}(this, function (exports) {
    'use strict';

    function App() {}

    App.prototype = {
        initialize: function () {
            console.log('initialize');
        }
    };

    exports.App = App;
}));