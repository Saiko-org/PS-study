/**
 *  프로그래머스 / 76502 / 괄호 회전하기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/76502
 *  solve: 
 */

import java.util.*;

class Solution {
    final char OPEN[] = {'(', '[', '{'};
    final char CLOSE[] = {')', ']', '}'};

    public int solution(String s) {
        int count = 0;
        if (isValid(s)) {
            count++;
        }

        for (int i = 0; i < s.length() - 1; i++) {
            s = rotateString(s);
            if (isValid(s)) {
                count++;
            }
        }
        return count;
    }

    public String rotateString(String s) {
        char[] chars = s.toCharArray();
        int len = chars.length;
        char[] rotatedChars = new char[len];

        for (int i = 0; i < len; i++) {
            rotatedChars[(i + len - 1) % len] = chars[i];
        }

        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < len; i++) {
            sb.append(rotatedChars[i]);
        }
        return sb.toString();
    }

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            for (int j = 0; j < OPEN.length; j++) {
                if (c == OPEN[j]) {
                    stack.add(c);
                    break;
                }

                if (c == CLOSE[j]) {
                    if (stack.isEmpty()) {
                        return false;
                    }
                    char p = stack.pop();
                    if (!isPair(c, p)) {
                        return false;
                    }
                    break;
                }
            }
        }
        return stack.isEmpty() ? true : false;
    }

    public boolean isPair(char c, char p) {
        for (int i = 0; i < OPEN.length; i++) {
            if ((c == OPEN[i] && p == CLOSE[i]) || c == CLOSE[i] && p == OPEN[i]) {
                return true;
            }
        }
        return false;
    }
}
