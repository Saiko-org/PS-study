/**
 * 프로그래머스 : k번째 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * 소요시간 15분
 */

import java.util.*;

class Solution {
  public int[] solution(int[] array, int[][] commands) {
    int[] answer = new int[commands.length];

    for (int i = 0 ; i < commands.length ; i++) {
      answer[i] = findNumber(array, commands[i]);
    }

    return answer;
  }

  private int findNumber(int[] array, int[] command) {
    int i = command[0] - 1;
    int j = command[1] - 1;
    int k = command[2] - 1;

    int[] temp = new int[j - i + 1];

    for (int x = 0 ; x < temp.length ; x++) {
      temp[x] = array[x + i];
    }

    Arrays.sort(temp);

    return temp[k];
  }
}