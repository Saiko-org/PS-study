// 리트코드 / 139 / Word Break
// https://leetcode.com/problems/word-break/
// add:

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        boolean dp[] = new boolean[s.length()];

    for (int start = 0; start < s.length(); start++) {
      for (int i = 0; i < wordDict.size(); i++) {
        String word = wordDict.get(i);
        if (start + word.length() > s.length()) {
          continue;
        }
        if (s.substring(start, start + word.length()).equals(word)) {
          if (start - 1 >= 0 && !dp[start - 1]) {
            continue;
          }
          dp[start + word.length() - 1] = true;
        }
      }
    }

    return dp[s.length() - 1];
  }
}

