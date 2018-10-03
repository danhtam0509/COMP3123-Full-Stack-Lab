

var multiplyTwoNumbers = function(x, y) {
    if (!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x * y;
}

var evenDoubler = function(x) {
    if (!isInteger(x)) {
        throw new Error()
    }
    else if (x % 2 == 0) {
        return x * x;
    }
    else if (x % 2 == 1) {
        return 0;
    }
}

var isInteger = function(param) {
    return Number.isInteger(param);
}

module.exports = {
    multiplyTwoNumbers: multiplyTwoNumbers,
    evenDoubler: evenDoubler
}