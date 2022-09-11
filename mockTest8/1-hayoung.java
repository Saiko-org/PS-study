// 프로그래머스 / 모의테스트8-1 / 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// solve: 

import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        int first[] = {1,2,3,4,5};
        int second[] = {2,1,2,3,2,4,2,5};
        int third[] = {3,3,1,1,2,2,4,4,5,5};
        
        int f = 0, s = 0, t = 0;
        int score[] = new int[3];
        int max = 0;
        int maxIndex = 0;
        
        for (int answer : answers) {
            if (answer == first[(f + first.length) % first.length]) {
                score[0]++;
            }
            if (answer == second[(s + second.length) % second.length]) {
                score[1]++;
            }
            if (answer == third[(t + third.length) % third.length]) {
                score[2]++;
            }
            f++;
            s++;
            t++;
            
            for (int i = 0; i < 3; i++) {
                if (max < score[i]) {
                    max = score[i];
                    maxIndex = i + 1;
                }
            }
        }
        
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            if (score[i] == max) {
                list.add(i + 1);
            }
        }
        
        Collections.sort(list);
        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
