// 2.7 Without writing any new functions, show 3 ways to create the inc function
const inc1 = addf(1);

const inc2 = liftf(add)(1);

const inc3 = curry(add, 1);

module.exports = {inc1, inc2, inc3}