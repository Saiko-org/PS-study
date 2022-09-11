// 프로그래머스 / 모의테스트8-2 / 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// solve: 

import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        Map<String, Integer> pm = new HashMap<>();
        Map<String, Integer> cm = new HashMap<>();
        for (String p : participant) {
            if (pm.containsKey(p)) {
                int ct = pm.get(p);
                pm.replace(p, ct + 1);
                continue;
            }
            pm.put(p, 1);
        }
        
        String answer = "";
        for (String p : completion) {
            if (cm.containsKey(p)) {
                int ct = cm.get(p);
                cm.replace(p, ct + 1);
                continue;
            }
            cm.put(p, 1);
        }
        
        for (String s : pm.keySet()) {
            int ct = pm.get(s);
            if (!cm.containsKey(s)) {
                answer = s;
                break;
            }
            if (ct != cm.get(s)) {
                answer = s;
                break;
            }
        }  
        return answer;
    }
}
