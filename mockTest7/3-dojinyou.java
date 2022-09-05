/**
 * 프로그래머스 / 77885 / 2개 이하의 다른비트
 * https://school.programmers.co.kr/learn/courses/30/lessons/77885
 * solve: 55분
 */

public class Solution {

  public long[] solution(long[] numbers) {
    return getFFunctionResults(numbers);
  }

  private long[] getFFunctionResults(long[] numbers) {
    long[] results = new long[numbers.length];

    for (int i = 0; i < numbers.length; i++) {
      results[i] = fFunction(numbers[i]);
    }
    return results;
  }

  private long fFunction(long number) {
    if (number <= 2 || numbers % 2 == 0) {
      return number + 1
    }
    
    long pow = 1;
    while (pow < number) {

      if ((number % (pow * 4)) - (number % pow) <= pow + 1) {
        return number + pow;
      }
      pow *= 2;
    }
    return pow + number;
  }

}
