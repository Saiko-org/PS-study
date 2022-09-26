/**
 * 프로그래머스 / 118666 / 성격유형 검사하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * solve:  
 */

import java.util.*;

class Solution {
    final char type[][] = {
        {'R', 'T'}, 
        {'C', 'F'}, 
        {'J', 'M'}, 
        {'A', 'N'}
    };
    final int scores[] = {0, 3, 2, 1, 0, 1, 2, 3};
    public String solution(String[] survey, int[] choices) {
        
        Map<Character, Integer> result = new HashMap<>();

        for (int i = 0; i < choices.length; i++) {
            int c = choices[i];
            if (c == 4) {
                continue;
            }
            if (c <= 3) {
                char disagree = survey[i].charAt(0);
                mark(result, disagree, scores[c]);
                continue;
            }
            char agree = survey[i].charAt(1);
            mark(result, agree, scores[c]);    
        }
        
        return findType(result);
    }
    public String findType(Map<Character, Integer> result) {
        StringBuffer answer = new StringBuffer();
        for (int i = 0; i < type.length; i++) {
            int a = 0;
            int b = 0;
            if (result.containsKey(type[i][0])) {
                a = result.get(type[i][0]);
            }
            if (result.containsKey(type[i][1])) {
                b = result.get(type[i][1]);
            }
                
            if (a < b) {
                answer.append(type[i][1]);
                continue;
            }
            answer.append(type[i][0]);
        }
        
        return answer.toString();
    }
    public void mark(Map<Character, Integer> result, char c, int score) {
        if (!result.containsKey(c)) {
            result.put(c, score);
            return;
        }
        int curScore = result.get(c);
        result.replace(c, curScore + score);      
    }
}
