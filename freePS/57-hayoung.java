// 리트코드  / 57 / Insert Interval
// https://leetcode.com/problems/insert-interval/
// solve: 


import java.util.*;

class Interval {

  private int start;
  private int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }

  public int getStart() {
    return start;
  }

  public int getEnd() {
    return end;
  }
}

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {

        List<Interval> list = new ArrayList<>();
        List<Integer> starts = new ArrayList<>();
        List<Integer> ends = new ArrayList<>();

        init(list, intervals, newInterval);

        int end = -1;
        for (int i = 0; i < list.size(); i++) {
            Interval interval = list.get(i);

            if (end >= interval.getStart()) {
                continue;
            }
            end = interval.getEnd();

            for (int j = i + 1; j < list.size(); j++) {
                Interval next = list.get(j);
                if (next.getStart() <= end) {
                    end = Math.max(end, next.getEnd());
                } else {
                    break;
                }
        }

        starts.add(interval.getStart());
        ends.add(end);
    }
        int answer[][] = new int[starts.size()][2];
        for (int i = 0; i < starts.size(); i++) {
            answer[i][0] = starts.get(i);
            answer[i][1] = ends.get(i);
        }
        return answer;
    }

    private void init(List<Interval> list, int[][] intervals, int[] newInterval) {
        list.add(new Interval(newInterval[0], newInterval[1]));
    
        for (int i = 0; i < intervals.length; i++) {
            list.add(new Interval(intervals[i][0], intervals[i][1]));
        }
        
        Collections.sort(list, new Comparator<Interval>() {
            @Override
            public int compare(Interval o1, Interval o2) {
                return o1.getStart() - o2.getStart();
            }
        });
    }
}
