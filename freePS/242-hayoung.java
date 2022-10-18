// 리트코드 / 242 / Valid Anagram
// https://leetcode.com/problems/valid-anagram/
// solve:

import java.util.*;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!map.containsKey(c)) {
                map.put(c, 1);
                continue;
            }
            map.replace(c, map.get(c) + 1);
        }

        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            if (map.containsKey(c)) {
                if (map.get(c) <= 0) {
                    return false;
                }
                map.replace(c, map.get(c) - 1);
                continue;
            } 
            return false;
        }
        return true;
    }
}
