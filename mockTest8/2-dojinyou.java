/**
 * 프로그래머스 / 42576 / 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * solve: 12분
 */

package programmers.programmers.private2208.week3.test2;

import java.util.HashMap;
import java.util.Map;

public class Solution2 {

  Map<String, Integer> participants;

  public String solution(
      String[] participant,
      String[] completion
  ) {
    initData(participant);

    checkCompletion(completion);

    return getNotCompletedParticipant();
  }

  private String getNotCompletedParticipant() {
    return participants.keySet().stream().findFirst().get();
  }

  private void checkCompletion(String[] completion) {
    for (String finisher : completion) {
      if (this.participants.containsKey(finisher)) {
        int count = participants.get(finisher);
        if (count == 1) {
          participants.remove(finisher);
          continue;
        }

        participants.put(finisher, count - 1);
      }
    }
  }

  private void initData(String[] participants) {
    this.participants = new HashMap<>(participants.length);

    for (String participant : participants) {
      int count = this.participants.getOrDefault(participant, 0);
      this.participants.put(participant, count + 1);
    }
  }
}
