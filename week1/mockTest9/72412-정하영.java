// 프로그래머스 / 72412 / 순위 검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// add:


import java.util.*;

class Solution {
    Map<String, List<Integer>> map = new HashMap<>();
    
    public int[] solution(String[] info, String[] query) {
        init(info);
        int answer[] = new int[query.length];

        for (int i = 0; i < query.length; i++) {
          query[i] = query[i].replace("and ", "");
          String q[] = query[i].split(" ");

          StringBuffer sb = new StringBuffer();
          for (int j = 0; j < q.length - 1; j++) {
            sb.append(q[j]);
          }
          int score = Integer.parseInt(q[q.length - 1]);
            
          List<Integer> scores = map.get(sb.toString());
          if (scores == null) {
            continue;
          }

          int left = 0;
          int right = scores.size() - 1;

          if (scores.get(scores.size() - 1) < score) {
            continue;
          }
            
          while (left < right) {
            int mid = (left + right) / 2;
            if (score <= scores.get(mid)) {
              right = mid;
              continue;
            }
            left = mid + 1;
          }

          answer[i] += scores.size() - right;
        }
        return answer;
      }

    public void init(String[] infos) {

        for (String info : infos) {
          String keyword[] = info.split(" ");

          int score = Integer.parseInt(keyword[keyword.length - 1]);
          combination(0, 4, keyword, new String[keyword.length - 1], score);
        }
        for (String key : map.keySet()) {
            List<Integer> list = map.get(key);
            Collections.sort(list);
        }
    }

      public void combination(int i, int size, String[] info, String[] com,
        int score) {
        if (i >= size) {
          StringBuffer sb = new StringBuffer();
          for (int j = 0; j < com.length; j++) {
            sb.append(com[j]);
          }

          if (!map.containsKey(sb.toString())) {
              List<Integer> list = new ArrayList<>();
              list.add(score);
              map.put(sb.toString(), list);
              return;
          }
          map.get(sb.toString()).add(score);
          return;
        }

        com[i] = "-";
        combination(i + 1, size, info, com, score);

        com[i] = info[i];
        combination(i + 1, size, info, com, score);
      }
   }
