/**
 * 프로그래머스 / 118668 / 코딩 테스트 공부
 * https://school.programmers.co.kr/learn/courses/30/lessons/118668
 * add:
 */

import java.util.*;

class Problem {
    private int alpReq;
    private int copReq;
    private int alpRwd;
    private int copRwd;
    private int cost;
    
    Problem(int alpReq, int copReq, int alpRwd, int copRwd, int cost) {
        this.alpReq = alpReq;
        this.copReq = copReq;
        this.alpRwd = alpRwd;
        this.copRwd = copRwd;
        this.cost = cost;
    }
    
    public int getAlpRwd() {
        return alpRwd;
    }
    public int getCopRwd() {
        return copRwd;
    }
    public int getCost() {
        return cost;
    }
}

class Solution {
    int dp[][];
    List<Problem> solubleProblem[][];
    int maxAl = 0;
    int maxCo = 0;
    public int solution(int alp, int cop, int[][] problems) {
        maxAl = alp;
        maxCo = cop;
        init(problems);
        if (alp >= maxAl && cop >= maxCo) {
            return 0;
        }
        
        solve(alp, cop, 0);
        
        return dp[maxAl][maxCo];
    }
    
    public void solve(int alp, int cop, int time) {
        if (alp >= maxAl && cop >= maxCo) {
            return;
        }

        if (alp < maxAl && dp[alp + 1][cop] > time + 1) {
            dp[alp + 1][cop] = time + 1;
            solve(alp + 1, cop, time + 1);
        }

        if (cop < maxCo && dp[alp][cop + 1] > time + 1) {
            dp[alp][cop + 1] = time + 1;
            solve(alp, cop + 1, time + 1);
        }

        List<Problem> problems = solubleProblem[alp][cop];
        
        for (int i = 0; i < problems.size(); i++) {
            Problem problem = problems.get(i);
            int nalp = alp + problem.getAlpRwd();
            int ncop = cop + problem.getCopRwd();
            if (nalp > maxAl) {
                nalp = maxAl;
            }
            if (ncop > maxCo) {
                ncop = maxCo;
            }
            
            if (dp[nalp][ncop] > time + problem.getCost()) {
                dp[nalp][ncop] = time + problem.getCost();
                solve(nalp, ncop, time + problem.getCost());
            }
        }
    }
    
    public void init(int [][] problems) {
        for (int i = 0; i < problems.length; i++) {
            int alpReq = problems[i][0];
            int copReq = problems[i][1];
            maxAl = Math.max(maxAl, alpReq);
            maxCo = Math.max(maxCo, copReq);
        }
        
        dp = new int[maxAl + 1][maxCo + 1];
        solubleProblem = new ArrayList[maxAl + 1][maxCo + 1];
        
        for (int i = 0; i < dp.length; i++) {
            Arrays.fill(dp[i], Integer.MAX_VALUE);
        }
        
        for (int i = 0; i < solubleProblem.length; i++) {
            for (int j = 0; j < solubleProblem[0].length; j++) {
                solubleProblem[i][j] = new ArrayList<>();
            }
        }
        
        for (int i = 0; i < problems.length; i++) {
            int alpReq = problems[i][0];
            int copReq = problems[i][1];
            int alpRwd = problems[i][2];
            int copRwd = problems[i][3];
            int cost = problems[i][4];

            
            for (int j = 0; j < solubleProblem.length; j++) {
                for (int k = 0; k < solubleProblem[0].length; k++) {
                    if (alpReq <= j && copReq <= k) {
                        solubleProblem[j][k].add(new Problem(alpReq, copReq, alpRwd, copRwd, cost));
                    }
                }
            }
        }
    }
}
