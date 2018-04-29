// 2.14 Write a to function that takes a generator and an end value, and returns another generator that will produce
// numbers up to that limit

function from(num) {
  return function () {
    const x = num;
    num++;
    return x;
  };
}

function to(func, num) {
  return function () {
    const count = func();
    if (count < num) {
      return count;
    }
    return undefined;
  };
}

const index = to(from(2), 5);

console.log(index()); // 1
console.log(index()); // 2
console.log(index()); // undefined
console.log(index()); // undefined

module.exports = { from, to };
