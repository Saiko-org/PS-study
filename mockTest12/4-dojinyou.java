/**
 *  프로그래머스 / 43238 / 입국심사
 *  https://school.programmers.co.kr/learn/courses/30/lessons/43238
 *  solve: 50분
 */

public class Solution {

  public long solution(int n, int[] times) {
    int minTime = Integer.MAX_VALUE;
    int maxTime = 0;

    for (int time: times) {
      if (time < minTime) {
        minTime = time;
      }

      if (maxTime < time) {
        maxTime = time;
      }
    }

    long low = n * (minTime / times.length);
    long high = (long)n * (long)maxTime;

    long mid = (low + high) / 2;

    while (low < high) {
      long countCustomer = getCountCustomer(mid, times);

      if (countCustomer < n) {
        low = mid + 1;
      } else {
        high = mid;
      }

      mid = (low + high) / 2;
    }

    return mid;
  }

  private long getCountCustomer(
      long mid,
      int[] times
  ) {

    long count = 0;
    for (int time: times) {
      count += mid / time;
    }

    return count;
  }
}
