/**
 *  프로그래머스 / 1845 / 폰켓몬
 *  https://school.programmers.co.kr/learn/courses/30/lessons/1845
 *  solve: 5분
 */

import java.util.HashMap;

public class Solution {
  public int solution(int[] poketmonIds) {
    int numUniquePoketmon = getNumUniquePoketmon(poketmonIds);
    return Math.min(numUniquePoketmon, poketmonIds.length / 2);
  }

  private int getNumUniquePoketmon(int[] poketmonIds) {
    HashMap<Integer, Integer> poketmonIdToCount = new HashMap<>(poketmonIds.length);

    for (int id : poketmonIds) {
      int count = poketmonIdToCount.getOrDefault(id, 0);
      poketmonIdToCount.put(id, count + 1);
    }

    return poketmonIdToCount.size();
  }
}
