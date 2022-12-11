// 리트코드 / 416 / Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
// solve:

class Solution {
    public boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) {
            total += num;
        }

        if (total % 2 != 0) {
            return false;
        }

        int target = total / 2;
        boolean dp[] = new boolean[target + 1];
        dp[0] = true;

        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                if (dp[i - num]) {
                    dp[i] = true;
                }
            }
            if (dp[target]) {
                return true;
            }
        
        }
        return false;
    }
}
