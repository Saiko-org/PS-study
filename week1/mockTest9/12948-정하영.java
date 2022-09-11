// 프로그래머스 / 12948 / 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948
//  solve: 

import java.util.*;

class Solution {
    public String solution(String phone_number) {
        StringBuffer sb = new StringBuffer();
        sb.append(phone_number.substring(phone_number.length()-4));
        for (int i = 0; i < phone_number.length() - 4; i++) {
            sb.insert(0, "*");
        }
        return sb.toString();
    }
}
