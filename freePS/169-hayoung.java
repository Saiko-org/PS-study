// 리트코드 / 169 / Majority Element
// https://leetcode.com/problems/majority-element/
// solve: 

import java.util.*;
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        int maxCnt = 0;
        int maxNum = 0;

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int count = 1;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] != num) {
                    break;
                }
                count++;
            }
            if (maxCnt <= count) {
                maxCnt = count;
                maxNum = num;
            }
        }
        return maxNum;
    }   
}
