/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 *
 * https://leetcode.com/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (46.46%)
 * Likes:    700
 * Dislikes: 47
 * Total Accepted:    66.3K
 * Total Submissions: 142.6K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * Given two strings S and T, return if they are equal when both are typed into
 * empty text editors. # means a backspace character.
 *
 *
 * Example 1:
 *
 *
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 *
 *
 *
 * Example 2:
 *
 *
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 *
 *
 *
 * Example 3:
 *
 *
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 *
 *
 *
 * Example 4:
 *
 *
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 *
 *
 * Note:
 *
 *
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S and T only contain lowercase letters and '#' characters.
 *
 *
 * Follow up:
 *
 *
 * Can you solve it in O(N) time and O(1) space?
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  var a = [],
    b = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      a.pop();
    } else {
      a.push(S[i]);
    }
  }
  for (var j = 0; j < T.length; j++) {
    if (T[j] === '#') {
      b.pop();
    } else {
      b.push(T[j]);
    }
  }
  return a.join('') === b.join('');
};
