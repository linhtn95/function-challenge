const identify = require('../2.1');

describe('function identify', () => {
  it('function identify(3) should return a number with value 3', () => {
    expect(typeof identify(3)).toBe('number');
    expect(identify(3)).toBe(3);
  });
});

describe('function identify', () => {
  it('function identify(Hello) should return a string with value Hello', () => {
    expect(typeof identify('Hello')).toBe('string');
    expect(identify('Hello')).toBe('Hello');
  });
});

describe('function identify', () => {
  it('function identify([1, 2, 3]) should return an array [1, 2, 3]', () => {
    expect(Array.isArray(identify([1, 2, 3]))).toBe(true);
    expect(JSON.stringify(identify([1, 2, 3]))).toBe(JSON.stringify([1, 2, 3]));
  });
});

describe('function identify', () => {
  it('function identify({ name: linh, age: 23 }) should return an object { name: linh, age: 23 }', () => {
    expect(typeof identify({ name: 'linh', age: 23 })).toBe('object');
    expect(JSON.stringify(identify({ name: 'linh', age: 23 }))).toBe(JSON.stringify({ name: 'linh', age: 23 }));
  });
});

describe('function identify', () => {
  it('function identify(undefined) should return undefined', () => {
    expect(typeof identify(undefined)).toBe('undefined');
    expect(identify(undefined)).toBe(undefined);
  });
});

describe('function identify', () => {
  it('function identify(true) should return boolean true', () => {
    expect(typeof identify(true)).toBe('boolean');
    expect(identify(true)).toBe(true);
  });
});

describe('function identify', () => {
  it('function identify(() => console.log(3)) should return a function', () => {
    expect(typeof identify(() => console.log(3))).toBe('function');
  });
});
