// 프로그래머스 / 모의테스트7-1
// solve: 9분

import java.util.Deque;
import java.util.concurrent.LinkedBlockingDeque;

public class Solution {
  public int[] solution(int[] arr) {
    return deduplicate(arr);
  }

  private int[] deduplicate(int[] arr) {
    Deque<Integer> deduplicatedList = new LinkedBlockingDeque<>(arr.length);

    for (int num : arr) {
      if (!deduplicatedList.isEmpty() && deduplicatedList.peekLast() == num) {
        continue;
      }

      deduplicatedList.addLast(num);
    }

    return deduplicatedList
        .stream()
        .mapToInt(Integer::intValue)
        .toArray();
  }
}