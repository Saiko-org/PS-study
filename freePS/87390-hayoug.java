/**
 * 프로그래머스 / 87390 / n^2 배열 자르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/87390
 * solve:  
 */

import java.util.*;

class Solution {
    public int[] solution(int n, long left, long right) {
        List<Integer> list = new LinkedList<>();

    while (left <= right) {
      int r = (int) (left / n);
      int c = (int) (left % n);
      int value = Math.max(r, c) + 1;
      list.add(value);
      left++;
    }

    return list.stream()
                     .mapToInt(i -> i)
                     .toArray();
    }
}
