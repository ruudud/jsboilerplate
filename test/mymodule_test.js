(function(M) {
    'use strict';
    var assert = buster.assert, refute = buster.refute;

    buster.testCase('BasicModuleTest', {
        'should set myvar': function() {
            refute.defined(M.getMyVar());

            M.setMyVar('foobar');
            assert.equals(M.getMyVar(), 'foobar');
        }
    });
}(MYNAMESPACE.module('mymodule')));
