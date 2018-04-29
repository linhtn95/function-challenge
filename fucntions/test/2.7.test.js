const { inc1, inc2, inc3, add } = require('../2.7');

describe('function inc1', () => {
    it('function inc1(5) should return 6', () => {
      expect(inc1(5)).toBe(6);
    });
});

describe('function inc1', () => {
    it('function inc1(inc1(5)) should return 7', () => {
        expect(inc1(inc1(5))).toBe(7);
    });
});

describe('function inc2', () => {
    it('function inc2(5) should return 6', () => {
        expect(inc2(5)).toBe(6);
    });
});

describe('function inc2', () => {
    it('function inc2(inc2(5)) should return 7', () => {
        expect(inc2(inc2(5))).toBe(7);
    });
});

describe('function inc3', () => {
    it('function inc3(5) should return 6', () => {
        expect(inc3(5)).toBe(6);
    });
});

describe('function inc3', () => {
    it('function inc3(inc3(5)) should return 7', () => {
        expect(inc3(inc3(5))).toBe(7);
    });
});