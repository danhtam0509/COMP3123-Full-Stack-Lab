

var calc = require('./calculator');

var multiply = function(x, y) {
    console.log('Multiply ' + x + ' * ' + y + ' equals: ' + calc.multiplyTwoNumbers(x, y));
}

var doubler = function(x) {
    console.log('Even doubler ' + x + ' equals: ' + calc.evenDoubler(x));
}

multiply(6, 6);
doubler(4);