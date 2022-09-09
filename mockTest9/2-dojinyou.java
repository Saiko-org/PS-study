/**
 * 프로그래머스 / 42748 / K번째 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * solve: 20분
 */

import java.util.Arrays;

public class Solution {

  private final int startOrdinalIdx = 0;
  private final int endOrdinalIdx = 1;
  private final int targetOrdinalIdx = 2;

  public int[] solution(
      int[] array,
      int[][] commands
  ) {
    int[] result = new int[commands.length];

    for (int i = 0; i < commands.length; i++) {
      int[] command = commands[i];
      int startIdx = command[startOrdinalIdx] - 1;
      int endIdx = command[endOrdinalIdx] - 1;
      int targetIdx = command[targetOrdinalIdx] - 1;

      int[] slicedArray = slice(array, startIdx, endIdx);

      result[i] = slicedArray[targetIdx];
    }

    return result;
  }

  private int[] slice(
      int[] array,
      int startIdx,
      int endIdx
  ) {
    int[] slicedArray = new int[endIdx - startIdx + 1];

    for (int i = 0; i < slicedArray.length; i++) {
      slicedArray[i] = array[startIdx + i];
    }

    Arrays.sort(slicedArray);

    return slicedArray;
  }
}
