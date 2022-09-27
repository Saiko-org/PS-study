/**
 * 프로그래머스 / 92335 / k진수에서 소수 개수 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * solve:
 */

import java.util.*;

class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        String convertedNumber = convertDecimal(n, k);


        for (int i = 0; i < convertedNumber.length(); ) {
            if (convertedNumber.charAt(i) == '0') {
                i++;
                continue;
            }
            
            int end = i + 1;
            while (end < convertedNumber.length()) {
                if (convertedNumber.charAt(end) == '0') {
                    break;
                }
                end++;
            }

            String num = convertedNumber.substring(i, end);
            if (isPrimeNumber(Long.parseLong(num)) && verify(i - 1, end, convertedNumber)) {
                answer++;
            }
            i = end;
        }
        return answer;
    }

    public boolean verify(int before, int after, String s) {
        if (before < 0 && after >= s.length()) { // P
            return true;
        }

        if (before < 0) { //P0,
            return s.charAt(after) == '0';
        }
        if (after >= s.length()) { // OP
            return s.charAt(before) == '0';
        }

        // OPO
        return s.charAt(before) == '0' && s.charAt(after) == '0';
    }

    public boolean isPrimeNumber(long num) {
        if (num < 2) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public String convertDecimal(int n, int k) {
        StringBuffer sb = new StringBuffer();

        while (n > 0) {
            sb.append(n % k);
            n /= k;
        }

        return sb.reverse().toString();
    }
}

