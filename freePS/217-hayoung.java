
// 리트코드 / 217 /  Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
// solve: 

import java.util.*;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
