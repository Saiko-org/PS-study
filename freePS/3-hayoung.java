// 리트코드  / 3 / Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// solve: 

import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        StringBuilder sb = new StringBuilder();
        int answer = 0;
        for (int i = 0; i < s.length(); i++) {
            String str = String.valueOf(s.charAt(i));
            int index = sb.indexOf(str);
            if (index == -1) {
                sb.append(str);
            } else {
            String newString = sb.substring(index + 1);
            sb = new StringBuilder(newString).append(str);
            }
            answer = Math.max(answer, sb.length());
        }
    return answer;
  }
}
