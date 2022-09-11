// 프로그래머스 / 42862 / 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// solve : 

import java.util.*;

class Solution {
    int answer = 0;
    public int solution(int n, int[] lost, int[] reserve) {
        boolean student[] = new boolean[n + 1];
        int lostCount = lost.length;

        Arrays.fill(student, true);

        for (int i = 0; i < lost.length; i++) {
            student[lost[i]] = false;
        }

        for (int i = 0; i < reserve.length; i++) {
            if (!student[reserve[i]]) {
                student[reserve[i]] = true;
                lostCount--;
                reserve[i] = -1;
            }
        }

        reserve = Arrays.stream(reserve).filter((v) -> v != -1).toArray();
        solve(0, reserve, student, n, lostCount, 0);
        answer += (n - lostCount);
        return answer;
    }

    public void solve(int i, int[] reserve, boolean student[], int n, int lostCount, int borrowedCount) {
        if (i >= reserve.length || lostCount == borrowedCount) {
            answer = Math.max(answer, borrowedCount);
            return;
        }

        if (reserve[i] - 1 >= 1 && !student[reserve[i] - 1]) {
            student[reserve[i] - 1] = true;
            solve(i + 1, reserve, student, n, lostCount, borrowedCount + 1);
            student[reserve[i] - 1] = false;
        }

        if (reserve[i] + 1 <= n && !student[reserve[i] + 1]) {
            student[reserve[i] + 1] = true;
            solve(i + 1, reserve, student, n, lostCount, borrowedCount + 1);
            student[reserve[i] + 1] = false;
        }

        solve(i + 1, reserve, student, n, lostCount, borrowedCount);
    }
}
