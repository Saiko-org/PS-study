// 프로그래머스 / 77886 / 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886
// add :

import java.util.*;

class Solution {
    public String[] solution(String[] s) {
        Stack<Character> stack = new Stack<>();
        List<String> answer = new LinkedList<>();
        
        for (int i = 0; i < s.length; i++) {
            int count = 0;
            
            for (int j = 0; j < s[i].length(); j++) {
                char c = s[i].charAt(j);
                
                stack.push(c);

                if (stack.size() >= 3) {
                    StringBuffer sb = new StringBuffer();

                    for (int k = 0; k < 3; k++) {
                        sb.append(stack.pop());
                    }

                    if (sb.toString().equals("011")) {
                        count++;
                        continue;
                    }

                    for (int k = 2; k >= 0; k--) {
                        stack.push(sb.charAt(k));
                    }
                }       
            }
            
            StringBuffer sb = new StringBuffer();
            
            int lastZeroIndex = -1;
            int index = 0;
            
            while (!stack.isEmpty()) {
                char c = stack.pop();
                sb.append(c);
                if (lastZeroIndex == -1 && c == '0') {
                    lastZeroIndex = index;
                }
                index++;
            }
            
     
            for (int j = 0; j < count; j++) {
                if (lastZeroIndex != -1) {
                    sb.insert(lastZeroIndex, "011");
                    continue;
                }
                sb.append("011");
            }
            answer.add(sb.reverse().toString());
        }
        
        return answer.toArray(new String[0]);
    }
} 
