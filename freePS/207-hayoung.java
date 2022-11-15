// 리트코드 / 207 / Course Schedule
// https://leetcode.com/problems/course-schedule/description/
// add:

import java.util.*;

class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Map<Integer, List<Integer>> courseSchedule = new HashMap<>();
    
        init(courseSchedule, prerequisites, numCourses);

        boolean checked[] = new boolean[numCourses];
    
        // 아무 선이수 과목이 없는 경우는 수강할수 있음.
        for (int i = 0; i < numCourses; i++) {
            if (courseSchedule.get(i).size() == 0) {
                checked[i] = true;
            }
        }


        for (int i = 0; i < numCourses; i++) {
            if (!checked[i]) {
                if (!dfs(i, courseSchedule, checked, new boolean[numCourses])) {
                    return false;
                }
            }
        }
        return true;
    }

    private void init(Map<Integer, List<Integer>> courseSchedule, int[][] prerequisites, int numCourses) {
        for (int i = 0; i < numCourses; i++) {
            courseSchedule.put(i, new ArrayList<>());
        }

        for (int i = 0; i < prerequisites.length; i++) {
            int first = prerequisites[i][0];
            int second = prerequisites[i][1];

            courseSchedule.get(second).add(first); // 두번째 수업을 듣기 위해선 첫번째 수업 먼저 수강 필요.
        }
    }

    private boolean dfs(int course, Map<Integer, List<Integer>> courseSchedule, boolean checked[], boolean visited[]) {
        visited[course] = true;

        List<Integer> prerequisites = courseSchedule.get(course);
        for (int i = 0; i < prerequisites.size(); i++) {
            int first = prerequisites.get(i);
            if (visited[first]) {
                return false;
            }
            if (!checked[first]) {
                if (!dfs(first, courseSchedule, checked, visited)) {
                    return false;
                }
            }
        }
        checked[course] = true;
        return true;
    }
}
