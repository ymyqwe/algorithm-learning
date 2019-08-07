/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.85%)
 * Likes:    3195
 * Dislikes: 151
 * Total Accepted:    654.2K
 * Total Submissions: 1.8M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    var len = arr.length;
    if (s[i] === ')') {
      if (arr[len - 1] === '(') {
        arr.pop();
      } else {
        return false;
      }
    } else if (s[i] === ']') {
      if (arr[len - 1] === '[') {
        arr.pop();
      } else {
        return false;
      }
    } else if (s[i] === '}') {
      if (arr[len - 1] === '{') {
        arr.pop();
      } else {
        return false;
      }
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = isValid;
