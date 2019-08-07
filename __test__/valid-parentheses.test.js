const isValidParentheses = require('../20.valid-parentheses.js');

test('valid parentheses', () => {
  expect(isValidParentheses('()')).toBe(true);
  expect(isValidParentheses('()[]{}')).toBe(true);
  expect(isValidParentheses('([)]')).toBe(false);
  expect(isValidParentheses('')).toBe(false);
  expect(isValidParentheses('{[]}')).toBe(true);
});
