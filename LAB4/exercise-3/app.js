
var should = require('should');
var calc = require('./calculator');

describe('Calculator', function() {
    describe('when used symchronously', function() {
        it('should add two numbers correctly', function() {
            calc.AddTwoNumbers(2, 2).should.equal(4);
        });
    })
});