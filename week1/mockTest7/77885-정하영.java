// 프로그래머스 / 77885 / 2개 이하로 다른 비트
// https://school.programmers.co.kr/learn/courses/30/lessons/77885
// add: 

import java.util.*;

class Solution {
    public long[] solution(long[] numbers) {
        List<Long> list = new LinkedList<>();
        for (long num : numbers) {
            long zeroIndex = ~num & (num + 1);
            long answer = num | zeroIndex;
            if (num % 2 != 0) {
                answer = answer & (~(zeroIndex >> 1));
            }
            list.add(answer);
        }
        return list.stream().mapToLong(l -> l).toArray();
    }
}
