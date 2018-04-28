// 2.3 Write a function identifyf that takes an argument and returns a function that returns that argument
// var four = identifyf(3);
// four(); // 4

function identifyf(arg) {
  return function () {
    return arg + 1;
  };
}

const four = identifyf(3);
console.log(four());

module.exports = identifyf;
