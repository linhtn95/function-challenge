const { doubl, square, composeu } = require('../2.10');

describe('function composeu', () => {
    it('function composeu(doubl, square)(5) should return 100', () => {
      expect(composeu(doubl, square)(5)).toBe(100);
    });
});

describe('function composeu', () => {
    it('function composeu(doubl, square)(6) should return 144', () => {
      expect(composeu(doubl, square)(6)).toBe(144);
    });
});