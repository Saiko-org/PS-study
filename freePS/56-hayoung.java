// 리트코드 / 56 / Merge Intervals
// https://leetcode.com/problems/merge-intervals/
// solve:

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (o1, o2) -> {
      if (o1[0] == o2[0]) {
        return o1[0] - o2[0];
      } else {
        return o1[0] - o2[0];
      }
    });
    int answer[][] = new int[intervals.length][2];
    answer[0][0] = intervals[0][0];
    answer[0][1] = intervals[0][1];

    int index = 0;
    for (int i = 1; i < intervals.length; i++) {
      int start = intervals[i][0];
      int end = intervals[i][1];

      if (answer[index][0] <= start && answer[index][1] >= start) {
        answer[index][0] = Math.min(answer[index][0], start);
        answer[index][1] = Math.max(answer[index][1], end);
        continue;
      }
      if (answer[index][0] < start && answer[index][1] < end) {
        answer[++index][0] = start;
        answer[index][1] = end;
      }
    }
    int ret[][] = new int[index + 1][2];
    for (int i = 0; i <= index; i++) {
      ret[i][0] = answer[i][0];
      ret[i][1] = answer[i][1];
    }
    return ret;
  }
}
