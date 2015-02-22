define([
    'core/app'
], function (App) {
    'use strict';

    describe('test app', function () {
        var a;

        beforeEach(function () {
            a = new App();
        });

        it('should exists', function () {
            expect(App).toBeDefined();
        });

        it('should have #initialize method', function () {
            expect(a.initialize).toBeDefined();
        });

        it('should run method #initialize after run', function () {
            spyOn(a, 'initialize');
            a.initialize();
            expect(a.initialize).toHaveBeenCalled();
        });
    });
});
