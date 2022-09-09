/**
 * 프로그래머스 / 72414 / 광고 삽입
 * https://school.programmers.co.kr/learn/courses/30/lessons/72414
 * fail: 1시간
 */

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
  List<WatchingTimeLog> logs = new ArrayList<>();

  public String solution(
      String playTime,
      String advTime,
      String[] logs
  ) {
    init(logs);

    return findInsertAdvTime(playTime, advTime);
  }

  private void init(String[] logs) {
    Arrays.sort(logs);

    int notFinish = 0;
    for (int i = 0; i < logs.length; i++) {
      String[] log = logs[i].split("-");
      String startTime = log[0];
      String endTime = log[1];
      int count = 1;

      for (int j = 1; j < log.length - i; j++) {
        String[] nextLog = logs[i+j].split("-");
        if (nextLog[0].compareTo(endTime) > 0) {
          break;
        }

        if (nextLog[0].compareTo(endTime) <= 0) {
          count++;
          endTime = nextLog[0];
          notFinish++;
        }
      }

      this.logs.add(new WatchingTimeLog(startTime, endTime, count));
    }
  }

  private String findInsertAdvTime(
      String playTime,
      String advTime
  ) {
    return null;
  }

  // logs를 단위 시간으로 쪼개서 로그를 만든다.
  // 단위시간에 누적 타임 시간이 가장 긴 블럭 기준으로 앞뒤 블럭을 잡는다.

  static class WatchingTimeLog {
    public static final String SEPARATOR_WATCHING_LOG_STRING = "-";
    public static final int START_TIME_IDX = 0;
    public static final int END_TIME_IDX = 1;
    final LocalTime startTime;
    final LocalTime endTime;
    final int count;

    WatchingTimeLog(
        String startTime,
        String endTime,
        int count
    ) {
      this.startTime = LocalTime.parse(startTime);
      this.endTime = LocalTime.parse(endTime);
      this.count = count;
    }

    int getAllWatchingTime() {
      return (endTime.toSecondOfDay() - startTime.toSecondOfDay()) * count;
    }
  }
}
