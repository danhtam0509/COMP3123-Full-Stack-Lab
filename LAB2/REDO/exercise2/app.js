
var calc = require('./calculator');
var comp = require('./comparer');

function CompareAndCalculate(x, y) {
    comp.x = x;
    comp.y = y;

    calc.x = x;
    calc.y = y;

    if (comp.AreNumberEqual(x, y)) {
        console.log('numbers are equal');
        console.log(calc.Add());
    }
    else {
        console.log('numbers are not equal');
        console.log(calc.Subtract());
    }
}

CompareAndCalculate(5, 10);
CompareAndCalculate(5, 5);