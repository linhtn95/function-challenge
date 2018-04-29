function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function curry(binary, x) {
  return function (y) {
    return binary(x, y);
  };
}

var add3 = curry(add, 3);
console.log(add3(4)); // 7

console.log(curry(mul, 5)(6)); // 30

module.exports = { add, mul, curry };
