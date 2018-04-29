const { to, from } = require('../2.14');

describe('function from', () => {
  const index = to(from(1), 3);
  it('function index() called first time should return 1', () => {
    expect(index()).toBe(1);
  });
  it('function index() called second time should return 2', () => {
    expect(index()).toBe(2);
  });
  it('function index() called third time should return undefined', () => {
    expect(index()).toBe(undefined);
  });
  it('function index() called fourth time should return undefined', () => {
    expect(index()).toBe(undefined);
  });
});
