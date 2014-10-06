(function (root) {
    'use strict';

    function App() {
        return this;
    }

    App.prototype = {
        initialize: function () {
            console.log('initialize');
        },

        test: function () {
            return 'test';
        }
    };

    // Exports `App`.
    return (root.App = App);

}(this));
