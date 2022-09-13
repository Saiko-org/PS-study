/**
 * 프로그래머스 : 2개 이하의 다른비트
 * https://school.programmers.co.kr/learn/courses/30/lessons/77885
 * 소요시간 거의 2시간
 */
class Solution {
  public long[] solution(long[] numbers) {
    long[] answer = new long[numbers.length];

    for (int i = 0 ; i < numbers.length ; i++) {

      if (numbers[i] % 2 == 0) {
        answer[i] = numbers[i] + 1;
      } else {
        long temp = numbers[i];
        int countOne = 0;

        while (temp > 0) {
          if (temp % 2 == 1) {
            countOne++;
          } else {
            break;
          }
          temp /= 2;
        }

        long power = 1;
        countOne--;

        while (countOne-- > 0) {
          power *= 2;
        }

        answer[i] = numbers[i] + power;
      }
    }

    return answer;
  }
}
