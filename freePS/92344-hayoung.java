/**
 * 프로그래머스 / 92344 / 파괴되지 않은 건물
 * https://school.programmers.co.kr/learn/courses/30/lessons/92344
 * add:
 */

import java.util.*;

class Solution {
    public int solution(int[][] board, int[][] skill) {
        int answer = 0;
        int sum[][] = new int[board.length + 1][board[0].length + 1];
        
        for (int i = 0; i < skill.length; i++) {
            int type = skill[i][0];
            int r1 = skill[i][1];
            int c1 = skill[i][2];
            int r2 = skill[i][3];
            int c2 = skill[i][4];
            int degree = skill[i][5];
     
            if (type == 1) {
                degree *= -1;
            }
            
            sum[r1][c1] += degree;
            sum[r1][c2 + 1] -= degree;
            sum[r2 + 1][c1] -= degree;
            sum[r2 + 1][c2 + 1] += degree;
        }
        
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                if (c - 1 >= 0) {
                    sum[r][c] += sum[r][c-1];
                }
            }
        }
            
        for (int c = 0; c < board[0].length; c++) {
            for (int r = 0; r < board.length; r++) {
                if (r - 1 >= 0) {
                    sum[r][c] += sum[r-1][c];
                }
            }
        }
        
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                board[r][c] += sum[r][c];
            }
        }
            
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                if (board[r][c] >= 1) {
                    answer++;
                }
            }
        }
         return answer;
    }
}
