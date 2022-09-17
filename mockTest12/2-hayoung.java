// 프로그래머스 / 1878 / 나머지 한 점
// https://school.programmers.co.kr/learn/courses/18/lessons/1878
// solve: 

class Solution {
    public int[] solution(int[][] v) {
        int[] answer = new int[2];
        
        answer[0] = solve(0, v);
        answer[1] = solve(1, v);


        return answer;
    }
    
    public int solve(int i, int v[][]) {
        int answer = 0;
        if (v[0][i] == v[1][i]) {
            return v[2][i];
        }
        if (v[0][i] == v[2][i]) {
            return v[1][i];
        }
        if (v[1][i] == v[2][i]) {
            return v[0][i];
        }
        return 0;
    }
}
