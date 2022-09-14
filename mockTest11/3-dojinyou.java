/**
 *  프로그래머스 / 76502 / 괄호 회전하기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/76502
 *  solve: 17분
 */

import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {
  public int solution(String s) {
    int count = 0;

    for (int i = 0; i < s.length(); i++) {
      if (isValidBracket(s, i)) {
        count++;
      }
    }

    return count;
  }

  private boolean isValidBracket(
      String originBrackets,
      int startIdx
  ) {

    Deque<Bracket> bracketStack = new ArrayDeque<>();

    for (int i = 0; i < originBrackets.length(); i++) {
      int targetIdx = (startIdx + i) % originBrackets.length();
      Bracket bracket = Bracket.valueOf(originBrackets.charAt(targetIdx));

      if (bracket.isOpen) {
        bracketStack.push(bracket);
        continue;
      }


      if (bracketStack.isEmpty() || bracketStack.pop().priority != bracket.priority) {
        return false;
      }
    }

    return bracketStack.isEmpty();
  }

  enum Bracket {
    smallOpen(1, '(', true),
    smallClose(1, ')', false),
    middleOpen(2, '{', true),
    middleClose(2, '}', false),
    BigOpen(3, '[', true),
    BigClose(3, ']', false);
    final int priority;
    final char value;
    final boolean isOpen;

    Bracket(
        int priority,
        char value,
        boolean isOpen
    ) {
      this.priority = priority;
      this.value = value;
      this.isOpen = isOpen;
    }

    static Bracket valueOf(char value) {
      for (Bracket bracket : values()) {
        if (bracket.value == value) {
          return bracket;
        }
      }
      throw new IllegalArgumentException();
    }
  }
}
