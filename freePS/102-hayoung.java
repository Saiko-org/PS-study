// 리트코드  / 102 / Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> answer = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        if (root == null) {
            return answer;
        }
        queue.add(root);

        while (!queue.isEmpty()) {
            List<Integer> nodes = new ArrayList<>();
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (node.left != null) {
                    queue.add(node.left);
                } 
                if (node.right != null) {
                    queue.add(node.right);
                }
                nodes.add(node.val);
            }
            
            answer.add(nodes);
        }
        return answer;
    }
}
