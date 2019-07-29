/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 2 || x=== 1 ) {
    return 1;
  }
  if (x === 0) return 0
  var left = 1, right = x, result = 0;
  while (left <= right) {
    var mid = ((right - left) >> 1) + left;
    if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
      result = mid
    }
  }
  return result;
};

module.exports = mySqrt;
// export default mySqrt;
// console.log(mySqrt(121));
