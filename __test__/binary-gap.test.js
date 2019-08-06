const binaryGap = require('../868.binary-gap.js');

test('binary gap', () => {
  expect(binaryGap(1)).toBe(0);
  expect(binaryGap(5)).toBe(2);
  expect(binaryGap(18)).toBe(3);
});
