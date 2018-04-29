const { add, limit } = require('../2.12');

describe('function limit', () => {
  const addLimited = limit(add, 1);
  it('function addLimited(3, 4) should return 7', () => {
    expect(addLimited(3, 4)).toBe(7);
  });
  it('function addLimited(3, 5) should return undefined', () => {
    expect(addLimited(3, 5)).toBe(undefined);
  });
  it('function addLimited(4, 5) should return undefined', () => {
    expect(addLimited(4, 5)).toBe(undefined);
  });
});
