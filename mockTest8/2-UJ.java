/**
 * 프로그래머스 : 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 소요시간 : 5분 이내
 */

import java.util.*;

class Solution {
  public String solution(String[] participant, String[] completion) {
    String answer = "";

    Arrays.sort(participant);
    Arrays.sort(completion);

    for (int i = 0 ; i < completion.length ; i++) {
      if (!participant[i].equals(completion[i])) {
        return participant[i];
      }
    }

    return participant[participant.length - 1];
  }
}