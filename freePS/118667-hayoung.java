/**
 * 프로그래머스 / 118667 / 두 큐 합 같게 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/118667
 * solve:  
 */

import java.util.*;

class Solution {
    int answer = Integer.MAX_VALUE;
    public int solution(int[] queue1, int[] queue2) {
        Deque<Integer> q1 = new ArrayDeque<>();
        Deque<Integer> q2 = new ArrayDeque<>();
        
        long sum1 = 0, sum2 = 0;
        long end = queue1.length * 3;
        for (int i = 0; i < queue1.length; i++) {
            q1.add(queue1[i]);
            q2.add(queue2[i]);
            sum1 += queue1[i];
            sum2 += queue2[i];
        }
        
        for (int i = 0; i <= end; i++) {
            if (sum1 == sum2) {
                answer = i;
                break;
            }
            if (sum1 < sum2) {
                int v = q2.pollFirst();
                q1.add(v);
                sum1 += v;
                sum2 -= v;
                continue;
            }
            
            if (sum1 > sum2) {
                int v = q1.pollFirst();
                q2.add(v);
                sum1 -= v;
                sum2 += v;
            }
        }
        return answer == Integer.MAX_VALUE ? -1 : answer;
    }

}
