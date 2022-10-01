/**
 * 프로그래머스 / 92331 / 주차 요금 계산
 * https://school.programmers.co.kr/learn/courses/30/lessons/92341
 * solve:
 */

import java.util.*;

class Solution {
    final int LAST_TIME = 23 * 60 + 59;
    final Map<String, Queue<Integer>> map = new HashMap<>();
    public int[] solution(int[] fees, String[] records) {
        for (int i = 0; i < records.length; i++) {
            String input[] = records[i].split(" ");
            String time[] = input[0].split(":");
            String carNum = input[1];

            if (!map.containsKey(carNum)) {
                Queue<Integer> queue = new LinkedList<>();
                queue.add(toMinute(time));
                map.put(carNum, queue);
                continue;
            }
            Queue<Integer> queue = map.get(carNum);
            queue.add(toMinute(time));
        }

        List<String> carNums = new ArrayList<>(map.keySet());
        Collections.sort(carNums);
        
        int[] answer = new int[carNums.size()];
        for (int i = 0; i < carNums.size(); i++) {
            Queue<Integer> queue = map.get(carNums.get(i));
            int totalTime = 0;
            while (queue.size() >= 2) {
                int in = queue.poll();
                int out = queue.poll();
                totalTime += out - in;
            }

            if (!queue.isEmpty()) {
                totalTime += LAST_TIME - queue.poll();
            }
            answer[i] += calculateFee(totalTime, fees);
        }
        return answer;
    }

    public int calculateFee(int time, int fees[]) {
        if (time <= fees[0]) {
            return fees[1];
        }
        return (int) (fees[1] + Math.ceil((time - fees[0]) / (double) fees[2]) * fees[3]);
    }

    public int toMinute(String time[]) {
        return Integer.parseInt(time[0]) * 60 + Integer.parseInt(time[1]);
    }
}
