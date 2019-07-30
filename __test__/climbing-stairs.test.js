const climbStairs = require('../70.climbing-stairs.js');

test('the square root of numbers', () => {
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(10)).toBe(89);
});
