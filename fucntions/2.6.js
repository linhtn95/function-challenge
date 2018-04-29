function curry(binary, x) {
  return function (y) {
    return binary(x, y);
  };
}

module.exports = curry;
