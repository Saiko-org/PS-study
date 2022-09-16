/**
 * 프로그래머스 / 12916 / 문자열 내 p와 y의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * solve: 2분
 */

public class Solution {
  boolean solution(String s) {
    int countP = 0;
    int countY = 0;
    s = s.toLowerCase();

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == 'y') {
        countY++;
      }

      if (s.charAt(i) == 'p') {
        countP++;
      }
    }

    return countP == countY;
  }
}
