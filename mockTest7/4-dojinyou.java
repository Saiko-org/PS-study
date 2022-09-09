/**
 * 프로그래머스 / 77886 / 옮기기
 * https://school.programmers.co.kr/learn/courses/30/lessons/77886
 * fail : 1시간, add : 로직 참고(15분)
 */

import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

  Deque<Character> deque;

  public String[] solution(String[] originStringArray) {
    String[] reorderedStringArray = new String[originStringArray.length];

    for (int i = 0; i < reorderedStringArray.length; i++) {
      reorderedStringArray[i] = gerReorderString(originStringArray[i]);
    }

    return reorderedStringArray;
  }

  private String gerReorderString(String originString) {
    deque = new ArrayDeque<>(originString.length());

    int count110 = getCount110(originString);
    if (count110 == 0) {
      return originString;
    }

    return makeReorderString(count110);
  }

  private String makeReorderString(int count110) {
    StringBuilder sb = new StringBuilder();
    boolean notFind0 = true;

    while (!deque.isEmpty()) {
      char c = deque.pop();
      if (notFind0 && c == '0') {
        sb.append("011".repeat(count110));
        notFind0 = false;
      }
      sb.append(c);
    }

    if (notFind0) {
      sb.append("011".repeat(count110));
    }

    return sb
        .reverse()
        .toString();
  }

  private int getCount110(String originString) {
    int count110 = 0;

    for (int i = 0; i < originString.length(); i++) {
      if (originString.charAt(i) == '0' && 2 <= deque.size()) {
        char prev1 = deque.pop();
        char prev2 = deque.pop();

        if (prev1 == '1' && prev2 == '1') {
          count110++;
          continue;
        }
        deque.push(prev2);
        deque.push(prev1);
      }

      deque.push(originString.charAt(i));
    }
    return count110;
  }
}
