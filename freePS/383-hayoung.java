// 리트코드  / 383 / Ransom Note
// https://leetcode.com/problems/ransom-note/
// solve: 

import java.util.*;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < magazine.length(); i++) {
            char c = magazine.charAt(i);
            if (map.containsKey(c)) {
                map.replace(c, map.get(c) + 1);
                continue;
            }
            map.put(c, 1);
        }

        for (int i = 0; i < ransomNote.length(); i++) {
            char c = ransomNote.charAt(i);
            if (map.containsKey(c)) {
                int cnt = map.get(c);
                if (cnt <= 0) {
                    return false;
                }
                map.replace(c, cnt - 1);
                continue;
            }
            return false;
        }
        return true;
    }
}
