/**
 *  프로그래머스 / X / 팰린드롬
 *  2018 하반기 공채 대비 코딩테스트 실전모의고사 1회 1번 문제라고 합니다. (지금은 확인 불가)
 *  solve: 8분
 */

public class Solution {
  public int solution(int n, int m) {
    int count = 0;

    for (int i = n; i <= m; i++) {
      if(isPalindrome(i)) {
        count++;
      }
    }

    return count;
  }

  private boolean isPalindrome(int num) {
    return isPalindrome(String.valueOf(num));
  }

  private boolean isPalindrome(String numString) {
    int len = numString.length();

    if (len <= 1) {
      return true;
    }

    return numString.charAt(0) == numString.charAt(len - 1) && isPalindrome(numString.substring(1, len - 1));
  }
}
