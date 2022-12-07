/**
 * 프로그래머스 : 핸드폰 번호 가리기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 소요시간 5분 이내
 */

class Solution {
  public String solution(String phone_number) {
    StringBuilder sb = new StringBuilder();
    int length = phone_number.length();

    for (int i = 0 ; i < length ; i++) {
      if (i < length - 4) {
        sb.append("*");
      } else {
        sb.append(phone_number.charAt(i));
      }
    }

    return sb.toString();
  }
}