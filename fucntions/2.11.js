// 2.11 Write a function composeb that takes two binary functions and returns a function that calls them both
function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function composeb(b1, b2) {
    return function(x, y, z) {
        return b2(b1(x, y), z);
    }
}

console.log(composeb(add, mul)(2, 2, 7));

module.exports = {add, mul, composeb};