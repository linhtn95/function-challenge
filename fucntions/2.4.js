/* Write a function addf that adds from 2 invocations */

function addf(x) {
  return function (y) {
    return x + y;
  };
}

console.log(addf(98)('dsd'));

module.exports = addf;
