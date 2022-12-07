/**
 * 프로그래머스 : 옮기기
 * https://school.programmers.co.kr/learn/courses/30/lessons/77886
 * 소요시간 : X
 * 풀이 검색 참고
 */
import java.util.Stack;

class Solution {

  private Stack<Character> stack = new Stack<>();
  private int count;
  private StringBuilder sb;

  public String[] solution(String[] s) {

    String[] answer = new String[s.length];
    Stack<Character> stack = new Stack<>();

    for (int i = 0 ; i < s.length ; i++) {
      String str = s[i];
      count = 0;
      sb = new StringBuilder();

      find110(str);

      int insertIndex = findInsertIndex();
      resultString(insertIndex);

      answer[i] = sb.toString();;
    }

    return answer;
  }

  private void resultString(int insertIndex) {

    while (count-- > 0) {
      sb.insert(insertIndex, "110");
      insertIndex += 3;
    }
  }

  private int findInsertIndex() {

    int index = stack.size();
    boolean flag = false;

    while (stack.size() > 0) {

      if (!flag && stack.peek() == '1') {
        index--;
      }

      if (!flag && stack.peek() == '0') {
        flag = true;
      }

      sb.insert(0, stack.pop());
    }

    return index;
  }

  private void find110(String str) {

    for (int i = 0 ; i < str.length() ; i++) {
      char current = str.charAt(i);

      if (stack.size() >= 2) {
        char pre1 = stack.pop();
        char pre2 = stack.pop();

        if (pre1 == '1' && pre2 == '1' && current == '0') {
          count++;
        } else {
          stack.push(pre2);
          stack.push(pre1);
          stack.push(current);
        }

      } else {
        stack.push(current);
      }
    }
  }
}