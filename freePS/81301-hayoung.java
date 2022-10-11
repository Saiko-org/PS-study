// 프로그래머스 / 81301 / 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// solve: 11분

import java.util.*;

class Solution {
    public int solution(String s) {
        Map<String, String> dic = new HashMap<>();
        init(dic);
        
        StringBuffer sb = new StringBuffer();
        
        for (int i = 0; i < s.length(); i++) {
            char f = s.charAt(i);
            if (f >= '0' && f <= '9') {
                sb.append(f);
                continue;
            }
            StringBuffer str = new StringBuffer();
            for (int j = i; j < s.length(); j++) {
                if (dic.containsKey(str.toString())) {
                    break;
                }
                
                char n = s.charAt(j);
                if (n >= '0' && n <= '9') {
                    break;
                }
                str.append(n);
                i = j;
            }
            sb.append(dic.get(str.toString()));
        }
        return Integer.parseInt(sb.toString());
    }
    
    public void init(Map<String, String> dic) {
        dic.put("zero", "0");
        dic.put("one", "1");
        dic.put("two", "2");
        dic.put("three", "3");
        dic.put("four", "4");
        dic.put("five", "5");
        dic.put("six", "6");
        dic.put("seven", "7");
        dic.put("eight", "8");
        dic.put("nine", "9");
    }
}
