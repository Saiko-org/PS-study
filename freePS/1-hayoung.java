// 리트코드 / 1 / 두수의 합
// https://leetcode.com/problems/two-sum/
// solve:

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int answer[] = new int[2];

        for (int i = 0; i < nums.length; i++) {
            int sum = nums[i];
            int j = i + 1;
            for (; j < nums.length; j++) {
                if (sum + nums[j] == target) {
                    sum += nums[j];
                    break;
                }
            }
            if (sum == target) {
                answer[0] = i;
                answer[1] = j;
                break;
            }
            
        }
        return answer;
    }
}
