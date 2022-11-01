// 리트코드 / 543 / Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
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
    int answer = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        solve(root);

        return answer;
    }
    private int solve(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int left = 0, right = 0;
        if (root.left != null) {
            left = solve(root.left) + 1;
        }
        
        if (root.right != null) {
            right = solve(root.right) + 1;
            if (root.val == 3) {
                System.out.println(right);
            }
        }


        answer = Math.max(answer, left + right);

        return Math.max(left, right);
    }
}
