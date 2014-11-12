'use strict';

module.exports = function DummyService() {
    this.dummyMethod = function () {
        console.log('This is a dummy method');
        var t = true;
        if(t) {
            console.log('if')
        } else {
            console.log('else');
        }
    }
};
