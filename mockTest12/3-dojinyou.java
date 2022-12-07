/**
 *  프로그래머스 / 70129 / 이진 변환 반복하기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/70129
 *  solve: 15분
 */

public class Solution {

  public static final String END_STRING = "1";
  public static final char REMOVED_CHAR = '0';
  int countRemovedZero = 0;
  int countConvert = 0;

  public int[] solution(String s) {
    binaryConvert(s);
    return new int[]{countConvert, countRemovedZero};
  }

  private void binaryConvert(String binaryString) {
    if (END_STRING.equals(binaryString)) {
      return;
    }
    countConvert++;

    String convertedBinaryString = convertToBinary(removeZero(binaryString));

    binaryConvert(convertedBinaryString);
  }

  private String convertToBinary(int num) {
    StringBuilder sb = new StringBuilder();

    while(num >= 2) {
      sb.append(num % 2);
      num /= 2;
    }
    sb.append(num);

    return sb.reverse().toString();
  }

  private int removeZero(String binaryString) {
    int countRemovedZero = 0;

    for (int i = 0; i < binaryString.length(); i++) {
      if (binaryString.charAt(i) == REMOVED_CHAR) {
        countRemovedZero++;
      };
    }

    this.countRemovedZero += countRemovedZero;

    return binaryString.length() - countRemovedZero;
  }
}
