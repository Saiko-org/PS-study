// 리트코드  / 15 / 3Sum
// https://leetcode.com/problems/3sum/submissions/839905006/
// add: 

import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> answer = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1;
            int right = nums.length - 1;
        
            while (left < right) {
                int sum = nums[left] + nums[right] + nums[i];

                if (sum < 0) {
                    left++;
                    continue;
                }
                if (sum > 0) {
                    right--;
                    continue;
                }

                List<Integer> list = new ArrayList<>();
                list.add(nums[left]);
                list.add(nums[right]);
                list.add(nums[i]);

                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }

                answer.add(list);
            }
        }
        return answer;
    }
}
