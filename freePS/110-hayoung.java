// 리트코드 / 110 / Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/
// solve:

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 import java.util.*;
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root != null) {
            int result = calculateSubTree(root);

            if (result == -1) {
                return false;
            }
        }
        return true;
    }
    private int calculateSubTree(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int sub1 = calculateSubTree(root.left);
        if (sub1 == -1) {
            return -1;
        }
        int sub2 = calculateSubTree(root.right);
        if (sub2 == -1) {
            return -1;
        }
        int diff = Math.max(sub1, sub2) - Math.min(sub1, sub2);
        if (diff > 1) {
            return -1;
        }
        return Math.max(sub1, sub2) + 1;
  }
}
