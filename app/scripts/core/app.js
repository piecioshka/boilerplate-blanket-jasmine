define([

], function () {
    'use strict';

    function App() {
        this.initialize();
    }

    App.prototype = {
        initialize: function () {
            console.log('initialize');
        },

        test: function () {
            return 'test';
        }
    };

    return App;

});
