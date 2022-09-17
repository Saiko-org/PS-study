// 프로그래머스 / 70129 / 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// solve: 

import java.util.*;

class Solution {
    int[] answer = new int[2];
    public int[] solution(String s) {
        while (!s.equals("1")) {
            answer[0]++;
            s = removeZero(s);
            s = toBinary(s);
        }
        return answer; 
    }
    
    public String removeZero(String s) {
        StringBuffer sb = new StringBuffer();
        char[] chars = s.toCharArray();
        
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == '0') {
                answer[1]++;
                continue;
            }
            sb.append(chars[i]);
        }
        return sb.toString();
    }
    
    public String toBinary(String s) {
        StringBuffer sb = new StringBuffer();
        
        int len = s.length();
    
        while (len >= 2) {
            int v = len % 2;
            sb.append(v);
            len = len / 2;
        }
        sb.append(len);
        return sb.reverse().toString();
    }
}
