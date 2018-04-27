// 2.2 Write 3 binary function: add, sub, and mul, that take 2 numbers and return their sum, difference, and product
// add(3, 4); // 7
// sub(3, 4); // -1
// mul(3, 4); // 12

function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'NOT A NUMBER';
}

function sub(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  return 'NOT A NUMBER';
}

function mul(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  return 'NOT A NUMBER';
}

console.log(add('3', 4));
console.log(sub(true, 4));
console.log(mul(3, 4));

module.exports = { add, sub, mul };
