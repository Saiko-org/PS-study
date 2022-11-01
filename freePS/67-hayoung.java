// 리트코드 / 67 / Add Binary
// https://leetcode.com/problems/add-binary/
// solve: 

import java.util.*;

class Solution {
    public String addBinary(String a, String b) {
        int indexForA = a.length() - 1;
        int indexForB = b.length() - 1;
        boolean bef = false;
        StringBuilder answer = new StringBuilder();
        
        while (indexForA >= 0 || indexForB >= 0) {
            int result = 0;
            if (indexForA >= 0) {
                if (a.charAt(indexForA) == '1') {
                    result += 1;
                }
            }
            if (indexForB >= 0) {
                if (b.charAt(indexForB) == '1') {
                    result += 1;
                } 
            }
            if (bef) {
                result += 1;
                bef = false;
            }
            
            if (result > 1) {
                bef = true;
                result = result % 2;
            }
            
            answer.append(result);
            indexForA--;
            indexForB--;
        }
        if (bef) {
            answer.append(1);
        }
        return answer.reverse().toString();
    }
}

