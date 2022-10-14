// 프로그래머스 / 82612 / 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612
// solve: 3분

class Solution {
    public long solution(int price, int money, int count) {
        long totalPrice = 0;
        for (int i = 1; i <= count; i++) {
            long pr = price * i;
            totalPrice += pr;
        }
        
        if (totalPrice < money) {
            return 0;
        }
        return totalPrice - money;
    }
}

