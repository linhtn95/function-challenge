// 2.8 Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function twice(binary) {
    return function(arg) {
        return binary(arg, arg);
    }
}

console.log(add(11, 11));
var doubl = twice(add);
console.log(doubl(11));
var square = twice(mul);
console.log(square(11));

module.exports = {add, mul, twice};