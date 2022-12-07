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
        solve(root, p, q, new boolean[2]);
        return answer;
  }

  private void solve(TreeNode root, TreeNode p, TreeNode q, boolean check[]) {
    if (root == null) {
      return;
    }
    if (root == p) {
      check[0] = true;
    }
    if (root == q) {
      check[1] = true;
    }

    boolean temp1[] = new boolean[2];
    boolean temp2[] = new boolean[2];

    solve(root.left, p, q, temp1);
    solve(root.right, p, q, temp2);

    if (temp1[0] || temp2[0]) {
      check[0] = true;
    }
    if (temp1[1] || temp2[1]) {
      check[1] = true;
    }
    if (check[0] && check[1] && answer == null) {
      answer = root;
    }
  }
}
