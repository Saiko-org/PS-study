// 리트코드 / 125 / Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
// solve:

class Solution {
    public boolean isPalindrome(String s) {
        String lower = s.toLowerCase();
        String trim = trim(lower);

        StringBuffer src = new StringBuffer(trim);
        StringBuffer reverse = new StringBuffer(trim).reverse();

        return src.toString().equals(reverse.toString());
    }
    private String trim(String s) {
        StringBuffer sb = new StringBuffer();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= 'a' && c <= 'z') {
                sb.append(c);
            }
            if (c >= '0' && c <= '9') {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}
