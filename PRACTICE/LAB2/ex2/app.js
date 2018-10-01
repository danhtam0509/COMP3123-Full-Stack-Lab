
var calc = require('./calculator');
var comp = require('./comparer');

function CompareAndCalculate(x, y) {
    comp.x = x;
    comp.y = y;

    calc.x = x;
    calc.y = y;

    if (comp.AreNumbersEquals(x, y)) {
        console.log('Numbers are equal');
        console.log(calc.Add());
    }
    else {
        console.log("Numbers are not equal");
        console.log(calc.Subtract());
    }
}

CompareAndCalculate(5, 10);
CompareAndCalculate(20, 20);