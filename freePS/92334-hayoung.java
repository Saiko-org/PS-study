/**
 * 프로그래머스 / 92335 / k진수에서 소수 개수 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * solve: 27분
 */

import java.util.*;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        Map<String, Set<String>> reportMap = new HashMap<>(); // 신고맵
        Map<String, Integer> alertCount = new LinkedHashMap<>(); // 알림 받은 횟수
        
        for (String id : id_list) {
            alertCount.put(id, 0);
        }
       
        for (String r : report) {
            String input[] = r.split(" ");
            if (!reportMap.containsKey(input[1])) {
                Set<String> reporter = new HashSet<>();
                reporter.add(input[0]);
                reportMap.put(input[1], reporter);
                continue;
            }
            Set<String> reporter = reportMap.get(input[1]);
            reporter.add(input[0]);
        }
        
        Set<String> keys = reportMap.keySet();
        
        
        for (String key : keys) {
            if (reportMap.get(key).size() >= k) {
                Set<String> reporter = reportMap.get(key);
                for (String rep : reporter) {
                    int count = alertCount.get(rep);
                    alertCount.replace(rep, count + 1);
                }
            }
        }
        return alertCount.values().stream().mapToInt(i->i).toArray();
        
    }
}
