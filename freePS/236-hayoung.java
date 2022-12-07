// 리트코드 / 236 / Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// add:

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    TreeNode answer = null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        solve(root, p, q);
        return answer;
  }

  private int solve(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null) {
      return 0;
    }
    int result = 0;
    if (root == p || root == q) {
      result = 1;
    }
   
    result += solve(root.left, p, q);
    result += solve(root.right, p, q);

    
    if (result == 2 && answer == null) {
      answer = root;
    }
    return result;
  }
}

