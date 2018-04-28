const { add, sub, mul } = require('./2.2');

function liftf(func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
}

const addf = liftf(add);

console.log(addf(3)(4));
console.log(liftf(mul)(5)(6));
console.log(liftf(add)(5)(6));
console.log(liftf(sub)(5)(6));

module.exports = liftf;
