// 리트코드 / 238 / Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// solve:

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int answer[] = new int[nums.length];

        int order[] = new int[nums.length];
        int inorder[] = new int[nums.length];

        order[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            order[i] = order[i - 1] * nums[i];
        }

        inorder[nums.length - 1] = nums[nums.length - 1];
        for (int i = nums.length - 2; i >= 0; i--) {
            inorder[i] = inorder[i + 1] * nums[i];
        }

        for (int i = 0; i < nums.length; i++) {
            int sum = 1;
            if (i - 1 >= 0) {
                sum *= order[i - 1];
            }
            if (i + 1 < nums.length) {
                sum *= inorder[i + 1];
            }
            answer[i] = sum;
        }
        return answer;
    }
}
