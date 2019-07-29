/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.36%)
 * Likes:    490
 * Dislikes: 112
 * Total Accepted:    118.2K
 * Total Submissions: 294.5K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1 || 0) return true
  var left = 0, right = num, result = 0;
  while (left <= right) {
    var mid = ((right- left) >> 1) + left;
    if (mid * mid > num) {
      right = mid -1
    } else {
      left = mid + 1
      result = mid
    }
  }
  if (result * result === num) return true
  return false
};

module.exports = isPerfectSquare;
// export default isPerfectSquare;
