/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var treeLen = Math.log(root.length + 1) / Math.log(2);
  for (var i = 0; i < treeLen; i++) {
    var nowArr = root.slice(2 ** i - 1, 2 ** (i + 1) - 1);
    debugger;
    var reverse = [];
    nowArr.forEach((item) => {
      reverse.unshift(item);
    });
    if (reverse.join('') === nowArr.join('')) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export default isSymmetric;
// isSymmetric([1, 2, 2, 3, 4, 4, 3]);
