// 2.10 Write a function composeu that takes two unary functions and returns a unary function that calls them both
function doubl(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function composeu(u1, u2) {
  return function (x) {
    return u2(u1(x));
  };
}

console.log(composeu(doubl, square)(5));

module.exports = { doubl, square, composeu };
