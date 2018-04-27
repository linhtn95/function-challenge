const ididentifyf = require('../2.3');

describe('function four', () => {
  const four = ididentifyf(3);
  it('function four() should return 4', () => {
    expect(four(3)).toBe(4);
  });
});

describe('function fine', () => {
  const fine = ididentifyf(4);
  it('function fine() should return 5', () => {
    expect(fine(4)).toBe(5);
  });
});

describe('function test', () => {
  const test = ididentifyf(undefined);
  it('function test() should return NaN', () => {
    expect(test(undefined)).toBe(NaN);
  });
});

describe('function test', () => {
  const test1 = ididentifyf(true);
  it('function test1() should return 2', () => {
    expect(test1(true)).toBe(2);
  });
});
