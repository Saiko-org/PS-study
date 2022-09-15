/**
 * 프로그래머스 / 12916 / 문자열 내 p와 y의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * solve: 
 */


class Solution {
    boolean solution(String s) {
        s = s.toUpperCase();
        int pc = 0, yc = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == 'P') {
                pc++;
            }
            if (c == 'Y') {
                yc++;
            }
        }

        if (pc == 0 && yc == 0) {
            return true;
        }
        if (pc == yc) {
            return true;
        }
        return false;
    }
}
