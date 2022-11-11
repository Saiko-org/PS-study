// 리트코드  / 150 / Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/840458113/
// solve: 

import java.util.*;

class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> queue = new ArrayDeque<>();
        
        for (String token : tokens) {
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int a = queue.pop();
                int b = queue.pop();

                if (token.equals("+")) {
                    queue.push(b + a);
                    continue;
                }
                if (token.equals("-")) {
                    queue.push(b - a);
                    continue;
                }
                if (token.equals("*")) {
                    queue.push(b * a);
                    continue;
                }
                queue.push(b / a);
                continue;
            }
            queue.push(Integer.parseInt(token));
        }
        return queue.pop();
    }
}
