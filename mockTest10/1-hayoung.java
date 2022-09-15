/**
 *  프로그래머스 / 12944 / 평균 구하기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12944
 *  solve: 
 */
class Solution {
    public double solution(int[] arr) {
        double sum = 0;
        for (int v : arr) {
            sum += v;
        }
        return sum / arr.length;
    }
}
