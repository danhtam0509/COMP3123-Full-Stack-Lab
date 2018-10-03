
var addTwoNumbers = function(x, y) {
    if(!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x + y;
}

var subtractTwoNumbers = function(x, y) {
    if(!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x - y;
}

var isInteger = function (param) {
    return Number.isInteger(param);
}

var addTwoNumberAsync = function (x, y) {
    return setTimeout(addTwoNumbers, 2000, x, y);
}

module.exports = {
    addTwoNumbers: addTwoNumbers,
    subtractTwoNumbers: subtractTwoNumbers, 
    addTwoNumberAsync: addTwoNumberAsync
}