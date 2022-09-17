// 프로그래머스 / 43238 / 입국 심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// add:

import java.util.*;


class Solution {
    public long solution(int n, int[] times) {
        
        Arrays.sort(times);
        
        long answer = 0;
        long left = 0;
        long right = (long)n * times[times.length - 1];
        
        while(left <= right) {
            long mid = (left + right) / 2;
            long sum = 0;
            for (int i = 0; i < times.length; i++) {
                sum += mid / times[i];
            }
            if (sum < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
                answer = mid;
            }
        }
        return answer;
    }
}
