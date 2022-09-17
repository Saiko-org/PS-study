/**
 *  프로그래머스 / X / 팰린드롬
 *  2018 하반기 공채 대비 코딩테스트 실전모의고사 1회 1번
 *  solve: 
 */

class Solution {
    public int solution(int n, int m) {
        int answer = 0;
        for (int i = n; i <= m; i++) {
            StringBuffer inorder = new StringBuffer(String.valueOf(i));

            if (inorder.toString().equals(inorder.reverse().toString())) {
                answer++;
            }
        }
        return answer;
    }
}

