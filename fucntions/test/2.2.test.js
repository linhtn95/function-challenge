const { add, sub, mul } = require('../2.2');

describe('function add', () => {
  it('function add(3, 4) should return 7', () => {
    expect(add(3, 4)).toBe(7);
  });
});

describe('function add', () => {
  it('function add(true, 4) should return NOT A NUMBER', () => {
    expect(add(true, 4)).toBe('NOT A NUMBER');
  });
});

describe('function sub', () => {
  it('function sub(5, 1) should return 4', () => {
    expect(sub(5, 1)).toBe(4);
  });
});

describe('function sub', () => {
  it('function sub(true, 4) should return NOT A NUMBER', () => {
    expect(sub(true, 4)).toBe('NOT A NUMBER');
  });
});

describe('function mul', () => {
  it('function mul(3, 4) should return 12', () => {
    expect(mul(3, 4)).toBe(12);
  });
});

describe('function mul', () => {
  it('function mul(true, 4) should return NOT A NUMBER', () => {
    expect(mul(true, 4)).toBe('NOT A NUMBER');
  });
});
