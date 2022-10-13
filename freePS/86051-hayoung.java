// 프로그래머스 / 86051 / 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// solve: 2분

import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        Set<Integer> set = new HashSet<>();
        
        for (int num : numbers) {
            set.add(num);
        }
        
        int answer = 0;
        for (int i = 1; i <= 9; i++) {
            if (!set.contains(i)) {
                answer += i;
            }
        }
        return answer;
    }
}
