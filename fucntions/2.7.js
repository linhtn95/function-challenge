// 2.7 Without writing any new functions, show 3 ways to create the inc function
const addf = require('./2.4');
const liftf = require('./2.5');
const { curry } = require('./2.6');

function add(a, b) {
  return a + b;
}

const inc1 = addf(1);

const inc2 = liftf(add)(1);

const inc3 = curry(add, 1);

console.log(inc1(5)); // 6
console.log(inc1(inc1(5))); // 7

module.exports = {
  inc1,
  inc2,
  inc3,
  add,
};
