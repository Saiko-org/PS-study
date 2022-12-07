/**
 * 프로그래머스 : 모의고사
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 소요시간 : 30분
 */

import java.util.*;

class Solution {

  private int[] firstStudent = {1, 2, 3, 4, 5};
  private int[] secondStudent = {2, 1, 2, 3, 2, 4, 2, 5};
  private int[] thirdStudent = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
  private int maxGrade;

  public int[] solution(int[] answers) {

    int maxScore = 0;
    int firstStudentScore = checkAnswer(answers, firstStudent);
    int secondStudentScore = checkAnswer(answers, secondStudent);
    int thirdStudentScore = checkAnswer(answers, thirdStudent);
    int[] studentScore = {firstStudentScore, secondStudentScore, thirdStudentScore};

    int[] answer = findWinner(studentScore);

    return answer;
  }

  private int[] findWinner(int[] studentScore) {

    List<Integer> result = new ArrayList<>();
    int maxScore = Arrays.stream(studentScore).max().getAsInt();

    for (int i = 0 ; i < studentScore.length ; i++) {
      if (maxScore == studentScore[i]) {
        result.add(i + 1);
      }
    }

    return result.stream().mapToInt(i -> i).toArray();
  }

  private int checkAnswer(int[] answers, int[] studentPattern) {

    int patternSize = studentPattern.length;
    int score = 0;

    for (int i = 0 ; i < answers.length ; i++) {
      if (answers[i] == studentPattern[i % patternSize]) {
        score++;
      }
    }

    return score;
  }
}