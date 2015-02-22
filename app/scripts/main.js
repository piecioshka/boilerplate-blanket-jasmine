(function () {
    'use strict';

    require.config({

    });

    require([
        'core/app'
    ], function (App) {
        return new App();
    });
}());
