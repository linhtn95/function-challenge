const from = require('../2.13');

describe('function from', () => {
  const index = from(0);
  it('function index() called first time should return 0', () => {
    expect(index()).toBe(0);
  });
  it('function index() called second time should return 1', () => {
    expect(index()).toBe(1);
  });
  it('function index() called third time should return 2', () => {
    expect(index()).toBe(2);
  });
});

describe('function from', () => {
  const index = from(1);
  it('function index() called first time should return 1', () => {
    expect(index()).toBe(1);
  });
  it('function index() called second time should return 2', () => {
    expect(index()).toBe(2);
  });
  it('function index() called third time should return 3', () => {
    expect(index()).toBe(3);
  });
});
