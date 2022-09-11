import java.util.*;

// 프로그래머스 / 81303 / 표 편집
// https://school.programmers.co.kr/learn/courses/30/lessons/81303
// add
class Solution {
    public String solution(int n, int k, String[] cmd) {
        int cursor = k;
        int tableSize = n;
        Stack<Integer> stack = new Stack<>();
        
        for (String command : cmd) {
            String line[] = command.split(" ");
            String keyword = line[0];
            
            if (keyword.equals("U")) {
                cursor -= Integer.parseInt(line[1]);
                continue;
            }
            if (keyword.equals("D")) {
                cursor += Integer.parseInt(line[1]);
                continue;
            }
            if (keyword.equals("C")) {
                stack.add(cursor);
                tableSize--;
                if (cursor == tableSize) {
                    cursor--;
                } 
                continue;
            }
            if (keyword.equals("Z")) {
                int removed = stack.pop();
                if (removed <= cursor) {
                    cursor++;
                }
                tableSize++;
            }
        }
        
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < tableSize; i++) {
            sb.append("O");
        }
        
        
        while (!stack.isEmpty()) {
            int removed = stack.pop();
            sb.insert(removed, "X");
        }
        return sb.toString();
    }
}
