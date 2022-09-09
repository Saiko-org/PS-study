// 프로그래머스 / 72412 / 순위 검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// fail: 시간초과


import java.util.*;

class Solution {
    Map<String, List<Integer>> map = new HashMap<>();
    final String INPUT[][] = {
        {"cpp", "java", "python"},
        {"backend", "frontend"},
        {"junior", "senior"},
        {"chicken", "pizza"}
    };
    public int[] solution(String[] info, String[] query) {
        init(info);
        int answer[] = new int[query.length];

        for (int i = 0; i < query.length; i++) {
            query[i] = query[i].replace("and ", "");
            query[i] = query[i].replace("-", "");
            String q[] = query[i].split(" ");

            String[] applicant = new String[q.length];

            for (int j = 0; j < q.length; j++) { // 0은 언어, 1은 직군, 2는 경력 3은 소울푸드 4는 코테 점수
                applicant[j] = q[j];
            }

            solve(i, answer, 0, applicant, new String[applicant.length]);
        }   
        return answer;
    }

    public void solve(int i, int answer[], int techStack,
    String[] applicant, String[] newApplicant) {
    if (techStack >= INPUT.length) {
      // 모든 기술 스택 다 만들어짐
      StringBuffer sb = new StringBuffer();
      for (int j = 0; j < newApplicant.length - 1; j++) {
          sb.append(newApplicant[j]);
      }

      List<Integer> scores = map.get(sb.toString());
      if (scores == null) {
        return;
      }

      int left = 0;
      int right = scores.size() - 1;
      int score = Integer.parseInt(applicant[techStack]);
      if (scores.get(scores.size()-1) < score) {
        return;
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
      return;
    }

    if (!applicant[techStack].equals("")) {
      newApplicant[techStack] = applicant[techStack];
      solve(i, answer, techStack + 1, applicant, newApplicant);
      return;
    }
    for (int j = 0; j < INPUT[techStack].length; j++) {
      newApplicant[techStack] = INPUT[techStack][j];
      solve(i, answer, techStack + 1, applicant, newApplicant);
    }
  }

  public void init(String[] info) {

    for (String s : info) {
      StringBuffer sb = new StringBuffer();
      String keyword[] = s.split(" ");
      for (int i = 0; i < keyword.length - 1; i++) {
        sb.append(keyword[i]);
      }

      if (!map.containsKey(sb.toString())) {
        List<Integer> list = new LinkedList<>();
        list.add(Integer.parseInt(keyword[keyword.length - 1]));
        map.put(sb.toString(), list);
        continue;
      }
      List<Integer> list = map.get(sb.toString());
      list.add(Integer.parseInt(keyword[keyword.length - 1]));
    }

    for (String s : map.keySet()) {
      List<Integer> list = map.get(s);
      Collections.sort(list);
    }
  }
}
