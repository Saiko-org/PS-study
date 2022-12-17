// 리트코드 / 5 / Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// add:
class Solution {

    public String longestPalindrome(String s) {
        boolean dp[][] = new boolean[s.length() + 1][s.length()];

    String answer = String.valueOf(s.charAt(0));
    for (int len = 1; len <= s.length(); len++) {
      for (int i = 0; i < len; i++) {
        if (s.charAt(i) == s.charAt(len - 1)) {
          if (len - i <= 3) { //axa
            dp[len - i][i] = true;
            answer = answer.length() < len - i ? s.substring(i, len) : answer;
            continue;
          }

          //axxxxxa
          if (dp[len - i - 2][i + 1]) {
            dp[len - i][i] = true;
            answer = answer.length() < len - i ? s.substring(i, len) : answer;
          }

        }
      }
    }
    return answer;
  }
}

