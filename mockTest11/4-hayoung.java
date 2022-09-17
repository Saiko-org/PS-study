/**
 *  프로그래머스 / 43164 / 여행경로
 *  https://school.programmers.co.kr/learn/courses/30/lessons/43164
 *  add:
 */

import java.util.*;

class Solution {
    Map<String, List<String>> map = new HashMap<>();
    Map<String, Integer> visited = new HashMap<>();
    public String[] solution(String[][] tickets) {
        for (int i = 0; i < tickets.length; i++) {
            String depart = tickets[i][0];
            String arrival = tickets[i][1];

            if (map.containsKey(depart)) {
                List<String> list = map.get(depart);
                list.add(arrival);
            } else {
                List<String> list = new ArrayList<>();
                list.add(arrival);
                map.put(depart, list);
            }
            if (visited.containsKey(depart + arrival)) {
                int count = visited.get(depart + arrival);
                visited.replace(depart + arrival, count + 1);
            } else {
                visited.put(depart + arrival, 1);
            }
        }

        List<String> keySet = new LinkedList<>(map.keySet());

        for (int i = 0; i < keySet.size(); i++) {
            Collections.sort(map.get(keySet.get(i)), new Comparator<String>() {
                @Override
                public int compare(String o1, String o2) {
                    return o1.compareTo(o2);
                }
            });
        }

        String[] plan = new String[tickets.length + 1];
        int i = 0;
        String cur = "ICN";
        plan[i++] = cur;
        dfs(tickets.length, cur, i, plan);
        return plan;
    }

    public boolean dfs(int remainTicketCount, String cur, int i, String[] plan) {
        if (remainTicketCount <= 0) {
            return true;
        }
        List<String> arrivals = map.get(cur);

        if (arrivals == null) {
            return false;
        }
        for (int j = 0; j < arrivals.size(); j++) {
            String arrival = arrivals.get(j);
            int count = visited.get(cur + arrival);
            if (count <= 0) {
                continue;
            }
            visited.replace(cur + arrival, count - 1);
            plan[i] = arrival;
            if (dfs(remainTicketCount - 1, arrival, i + 1, plan)) {
                return true;
            }
            visited.replace(cur + arrival, count + 1);
        }
        return false;
    }
}

