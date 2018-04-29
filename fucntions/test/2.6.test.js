const { add, mul, curry } = require('../2.6');

describe('function curry', () => {
  const add3 = curry(add, 3);
  it('function add3(4) should return 7', () => {
    expect(add3(4)).toBe(7);
  });
});

describe('function curry', () => {
  const add6 = curry(add, 6);
  it('function add6(4) should return 10', () => {
    expect(add6(4)).toBe(10);
  });
});

describe('function curry', () => {
  it('function curry(mul, 5)(6) should return 30', () => {
    expect(curry(mul, 5)(6)).toBe(30);
  });
});

describe('function curry', () => {
  it('function curry(mul, 10)(6) should return 30', () => {
    expect(curry(mul, 10)(6)).toBe(60);
  });
});
