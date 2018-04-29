const liftf = require('../2.5');
const { add, sub, mul } = require('../2.2');

describe('function liftf', () => {
  it('function liftf(mul)(5)(6) should return 30', () => {
    expect(liftf(mul)(5)(6)).toBe(30);
  });
});

describe('function liftf', () => {
  it('function liftf(add)(5)(6) should return 11', () => {
    expect(liftf(add)(5)(6)).toBe(11);
  });
});

describe('function liftf', () => {
  it('function liftf(add)(5)(6) should return -1', () => {
    expect(liftf(sub)(5)(6)).toBe(-1);
  });
});

describe('function liftf', () => {
  const addf = liftf(add);
  it('function addf(2)(4) should return 6', () => {
    expect(addf(2)(4)).toBe(6);
  });
});
