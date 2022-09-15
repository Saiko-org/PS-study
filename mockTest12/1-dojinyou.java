/**
 *  프로그래머스 / 12977 / 소수 만들기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12977
 *  solve: 30분
 */

import java.util.HashMap;
import java.util.Map;

public class Solution {

  Map<Integer, Integer> mapSumToCounts = new HashMap<>();

  public int solution(int[] nums) {

    initCombination(nums, 3);

    boolean[] isNotPrimeNumber = new boolean[3000];
    initPrimeNumber(isNotPrimeNumber);

    int count = 0;
    for (Map.Entry<Integer, Integer> entry : mapSumToCounts.entrySet()) {
      int sumOfNum = entry.getKey();
      int countOfSum = entry.getValue();

      if (isNotPrimeNumber[sumOfNum]) {
        continue;
      }
      count += countOfSum;
    }
    return count;
  }

  private void initPrimeNumber(boolean[] isNotPrimeNumber) {
    isNotPrimeNumber[0] = true;
    isNotPrimeNumber[1] = true;

    for (int i = 2; i < isNotPrimeNumber.length / 2; i++) {
      for (int j = 2 * i; j < isNotPrimeNumber.length; j += i) {
        isNotPrimeNumber[j] = true;
      }
    }
  }

  private void initCombination(
      int[] nums,
      int size
  ) {
    findCombination(nums, new boolean[nums.length], size, 0, 0);
  }

  private void findCombination(
      int[] nums,
      boolean[] visited,
      int size,
      int currentIdx,
      int depth
  ) {
    if (depth == size) {
      int result = 0;

      for (int i = 0; i < nums.length; i++) {
        if (!visited[i]) {
          continue;
        }
        result += nums[i];
      }

      int counts = mapSumToCounts.getOrDefault(result, 0);
      mapSumToCounts.put(result, counts + 1);
      return;
    }

    for (int i = currentIdx; i < visited.length; i++) {
      visited[i] = true;
      findCombination(nums, visited, size, i + 1, depth + 1);
      visited[i] = false;
    }
  }
}
