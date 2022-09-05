/**
 * 프로그래머스 / 77886 / 옮기기
 * https://school.programmers.co.kr/learn/courses/30/lessons/77886
 * fail : 1시간
 */

public class Solution {

  char[] char110 = new char[]{'1', '1', '0'};

  public String[] solution(String[] s) {
    return getMinStrings(s);
  }

  private String[] getMinStrings(String[] s) {
    String[] results = new String[s.length];

    for (int i = 0; i < s.length; i++) {
      results[i] = getMinString(s[i]);
    }

    return results;
  }

  private String getMinString(String s) {
    String next = getNextString(s);

    if (s.equals(next)) {
      return next;
    }

    return getMinString(next);
  }

  private String getNextString(
      String prevString
  ) {
    char[] charArray = prevString.toCharArray();
    int index110 = -1;
    int changeIndex = -1;
    int currentIndex = -1;
    while (currentIndex + 1 < charArray.length) {
      currentIndex++;

      if (check110(charArray, currentIndex)) {
        index110 = currentIndex;
        continue;
      }

      if (changeIndex == -1 && overThan110(charArray, currentIndex)) {
        changeIndex = currentIndex;
      }
    }

    if (index110 == -1 || changeIndex == -1) {
      return prevString;
    }

    return subString(charArray, index110, changeIndex);
  }

  private boolean overThan110(
      char[] charArray,
      int currentIndex
  ) {
    for (int i = 0; i < char110.length; i++) {
      if (charArray.length <= currentIndex + i) {
        return true;
      }

      if (charArray[currentIndex + i] < char110[i]) {
        return false;
      }
    }
    return true;
  }

  private String subString(
      char[] charArray,
      int index110,
      int changeIndex
  ) {
    StringBuilder sb = new StringBuilder(charArray.length);

    for (int i = 0; i < charArray.length; i++) {
      if (index110 <= i && i <= index110 + 2) {
        continue;
      }

      if (i == changeIndex) {
        sb.append(charArray[index110]);
        sb.append(charArray[index110 + 1]);
        sb.append(charArray[index110 + 2]);
      }

      sb.append(charArray[i]);
    }

    return sb.toString();
  }

  private boolean check110(
      char[] charArray,
      int currentIdx
  ) {
    for (int i = 0; i < char110.length; i++) {
      if (charArray.length <= currentIdx + i || charArray[currentIdx + i] != char110[i]) {
        return false;
      }
    }
    return true;
  }

}
