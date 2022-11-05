// 리트코드 / 53 / Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// solve: 

class Solution {
    public int maxSubArray(int[] nums) {
        int answer = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] + nums[i] > nums[i]) {
                nums[i] = nums[i - 1] + nums[i];
            }
            answer = Math.max(answer, nums[i]);
        }
        return answer;
    }
}
