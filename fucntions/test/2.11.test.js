const { add, mul, composeb } = require('../2.11');

describe('function composeb', () => {
  it('function composeb(add, mul)(2, 3, 7) should return 35', () => {
    expect(composeb(add, mul)(2, 3, 7)).toBe(35);
  });
});

describe('function composeb', () => {
  it('function composeb(add, mul)(1, 2, 3) should return 9', () => {
    expect(composeb(add, mul)(1, 2, 3)).toBe(9);
  });
});
