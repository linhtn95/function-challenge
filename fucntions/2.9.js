// 2.9 Write reverse, a function that reverses the arguments of a binary function\
function sub(a, b) {
  return a - b;
}

function reverse(binary) {
  return function (a, b) {
    return binary(b, a);
  };
}

const bus = reverse(sub);

console.log(bus(3, 2));

module.exports = { sub, reverse };
