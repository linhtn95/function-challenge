// 2.13 Write a from function that produces a generator that will produce a series of values

function from(num) {
  return function () {
    const x = num;
    num++;
    return x;
  };
}

const index = from(3);
console.log(index()); // 0
console.log(index()); // 1
console.log(index()); // 2

module.exports = from;
