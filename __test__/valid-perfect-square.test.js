const isPerfectSquare = require('../367.valid-perfect-square.js');

test('is perfect square', () => {
  expect(isPerfectSquare(1)).toBe(true);
  expect(isPerfectSquare(120)).toBe(false);
  expect(isPerfectSquare(121)).toBe(true);
});