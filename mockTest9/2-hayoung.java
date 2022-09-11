// 프로그래머스 / 42748 / K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// solve:

import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];

        for(int i = 0; i < commands.length; i++) {
            int s = commands[i][0];
            int e = commands[i][1];
            int k = commands[i][2];

            List<Integer> list = new LinkedList<>();
            for (int j = s - 1; j < e; j++) {
                list.add(array[j]);
            }

            Collections.sort(list);
            answer[i] = list.get(k - 1);
        }
        return answer;


    }
}
