// 리트코드  / 409 /  Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/
// solve: 

import java.util.*;

class Solution {
    public int longestPalindrome(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) {
                map.replace(c, map.get(c) + 1);
                continue;
            }
            map.put(c, 1);
        }
        
        List<Character> key = new ArrayList<>(map.keySet());
        int even = 0;
        boolean odd = false;

        for (int i = 0; i < key.size(); i++) {
            char k = key.get(i);
            int v = map.get(k);

            if (v % 2 == 0) {
                even += v;
                continue;
            } 
            if (v > 1) {
                even += v - 1;
            }
            odd = true;
        }
        if (odd) {
            return even + 1;
        }
        return even;
    }
}
