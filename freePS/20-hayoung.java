// 리트코드 / 20 / Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// solve:

import java.util.*;
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(' || c == '[' || c == '{') {
                stack.add(c);
                continue;
            } 
            if (stack.isEmpty()) {
                return false;
            }
            char p = stack.peek();
            if (isPair(p, c)) {
                stack.pop();
                continue;
            }
            return false;
        }
        if (!stack.isEmpty()) {
            return false;
        }
        return true;
    }
    private boolean isPair(char a, char b) {
        if (a == '(' && b == ')') {
            return true;
        }
        if (a == '[' && b == ']') {
            return true;
        }
        if (a == '{' && b == '}') {
            return true;
        }
        return false;
    }
}
