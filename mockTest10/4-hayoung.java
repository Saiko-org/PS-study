/**
 *  프로그래머스 / 72413 / 합승 택시 요금
 *  https://school.programmers.co.kr/learn/courses/30/lessons/72413
 *  solve: 
 */

import java.util.*;

class Solution {
    int cost[][];
    int dp[][];
    public int solution(int n, int s, int a, int b, int[][] fares) {
        cost = new int[n+1][n+1];
        for (int i = 0; i < fares.length; i++) {
            int c = fares[i][0];
            int d = fares[i][1];
            int f = fares[i][2];
            cost[c][d] = f;
            cost[d][c] = f;
        }
        floydWarshall(n);
        return solve(n, s, a, b);
    }

    public int solve(int n, int s, int a, int b) {
        int answer = dp[s][a] + dp[s][b];
        for (int i = 1; i <= n; i++) {
            int sum = dp[s][i] + dp[i][a] + dp[i][b];
            if (sum < 0) {
                continue;
            }

            answer = Math.min(answer, sum);
        }
        return answer;
    }

    public void floydWarshall(int n) {
        dp = new int[n+1][n+1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i != j) {
                    if (cost[i][j] != 0) {
                        dp[i][j] = cost[i][j];
                        dp[j][i] = cost[i][j];
                        continue;
                    }
                    dp[i][j] = 987654321;
                    dp[j][i] = 987654321;
                }
            }
        }


        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                for (int k = 1; k <= n; k++) {
                    int sum = dp[j][i] + dp[i][k];
                    if (sum < dp[j][k]) {
                        dp[j][k] = sum;
                        dp[k][j] = sum;
                    }
                }
            }
        }
    }
}
