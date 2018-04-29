const {add, mul, twice} = require('../2.8');

describe('function twice', () => {
    var doubl = twice(add);   
    it('function doubl(11) should return 22', () => {
      expect(doubl(11)).toBe(22);
    });
});

describe('function twice', () => {
    var square = twice(mul);   
    it('function square(11) should return 121', () => {
      expect(square(11)).toBe(121);
    });
});