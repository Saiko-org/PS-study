// 리트코드 / 8 / String to Integer (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/
// solve:

class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        if (s.isBlank()) {
            return 0;
        }
        int index = 0;
        int sign = 1;
         if (s.charAt(0) == '-') {
            sign = -1;
            index++;
        }
        if (s.charAt(0) == '+') {
            index++;
        }

        long number = 0;
        while (index < s.length()) {
            int n = s.charAt(index++) - '0';
            if (!(n >= 0 && n <= 9)) {
                break;
            }
            number = number * 10 + n;
            if (number * sign < Integer.MIN_VALUE) {
                return Integer.MIN_VALUE;
            }
            if (number * sign > Integer.MAX_VALUE) {
                return Integer.MAX_VALUE;
            }
        }
        return (int) number * sign;
    }
}

