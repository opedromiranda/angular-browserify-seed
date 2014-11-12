'use strict';

module.exports = function DummyFactory() {
    return {
        dummyMethod : function () {
            console.log('This is a dummy method');
        }
    };
};