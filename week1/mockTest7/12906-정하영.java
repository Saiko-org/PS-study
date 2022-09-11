// 프로그래머스 / 12906 / 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// solve: 

import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        List<Integer> list = new LinkedList<>();

        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            list.add(num);
            int j = i + 1;
            for (; j < arr.length; j++) {
                int nxt = arr[j];
                if (num == nxt) {
                    continue;
                }
                break;
            }
            i = j - 1;
        }

        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
