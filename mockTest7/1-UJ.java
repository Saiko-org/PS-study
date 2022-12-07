/**
 * 프로그래머스, 같은 숫자는 싫어!
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 소요시간 : 5분 이내
 */
import java.util.*;

public class Solution {
  public int[] solution(int []arr) {
    List<Integer> result = new ArrayList<>();

    for (int i = 0 ; i < arr.length - 1 ; i++) {
      int j = i + 1;
      if (arr[i] != arr[j]) {
        result.add(arr[i]);
      }
    }

    result.add(arr[arr.length - 1]);

    return result.stream().mapToInt(i -> i).toArray();
  }
}