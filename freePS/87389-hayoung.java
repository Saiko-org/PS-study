// 프로그래머스 / 87389 / 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389
// solve: 3분

import java.util.*;

class Solution {
    public int solution(int n) {
        for (int i = 1; i <= n - 1; i++) {
            if (n % i == 1) {
                return i;
            }
        }
        return 0;
    }
}
