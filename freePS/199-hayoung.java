// 리트코드 / 199 /  Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
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
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        boolean check[] = new boolean[101];
        List<Integer> list = new ArrayList<>();
        if (root == null) {
            return list;
        }
        solve(0, check, root, list);
        return list;
    }
    private void solve(int index, boolean check[], TreeNode root, List<Integer> list) {
        if (root == null) {
            return;
        }
        if (!check[index]) {
            check[index] = true;
            list.add(root.val);
        }
        solve(index + 1, check, root.right, list);
        solve(index + 1, check, root.left, list);
    }
}
