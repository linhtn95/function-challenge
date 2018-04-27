const addf = require('../2.4');

describe('function addf', () => {
  it('function addf(3)(4) should return 7', () => {
    expect(addf(3)(4)).toBe(7);
  });
});

describe('function addf', () => {
  it('function addf(3)(hello) should return 3hello', () => {
    expect(addf(3)('hello')).toBe('3hello');
  });
});
