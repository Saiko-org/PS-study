/**
 *  프로그래머스 / 1845 / 폰켓몬
 *  https://school.programmers.co.kr/learn/courses/30/lessons/1845
 *  solve: 
 */



import java.util.*;

class Solution {
    public int solution(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        if (set.size() >= nums.length / 2) {
            return nums.length / 2;
        }
        return set.size();
    }
}
