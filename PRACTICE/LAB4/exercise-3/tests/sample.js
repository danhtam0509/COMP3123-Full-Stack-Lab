
var greeter = function() {
    return "hello";
}

//greeter.shouldbe.a('string');
// greeter.should.equal('hello');
// greeter.should.have.lengthOf(5);

describe('greeter', function() {
    describe('when used synchronously', function() {
        it('should return hello', function() {
            greeter.should.equal("hello");
        });
    })
});