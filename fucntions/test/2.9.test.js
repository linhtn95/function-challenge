const { sub, reverse } = require('../2.9');

describe('function reverse', () => {
  const bus = reverse(sub);
  it('function bus(3, 2) should return -1', () => {
    expect(bus(3, 2)).toBe(-1);
  });
});

describe('function reverse', () => {
  const bus = reverse(sub);
  it('function bus(2, 5) should return 3', () => {
    expect(bus(2, 5)).toBe(3);
  });
});
