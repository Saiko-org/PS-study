/**
 * 프로그래머스 / 42840 / 모의고사
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * solve: 11분
 */
package programmers.programmers.private2208.week3.test2;

import java.util.ArrayList;
import java.util.List;

public class Solution1 {

  private final List<Student> students = new ArrayList<>(3);

  public int[] solution(int[] answers) {
    createStudent();

    solvedQuestion(answers);

    return getHighestScoreStudentIds();
  }

  private int[] getHighestScoreStudentIds() {
    List<Student> highestScoreStudentIds = new ArrayList<>(students.size());

    int maxScore = 0;

    for (Student student : students) {
      int score = student.getScore();

      if (maxScore < score) {
        highestScoreStudentIds.clear();
        highestScoreStudentIds.add(student);
        maxScore = score;
        continue;
      }

      if (maxScore == score) {
        highestScoreStudentIds.add(student);
      }

    }

    return highestScoreStudentIds
        .stream()
        .mapToInt(Student::getId)
        .toArray();
  }

  private void solvedQuestion(int[] answers) {
    for (int i = 0; i < answers.length; i++) {
      int questionId = i;
      int correctAnswer = answers[questionId];

      students.forEach(student -> student.trySolve(questionId, correctAnswer));
    }
  }

  private void createStudent() {
    students.add(new Student(1, new int[]{1, 2, 3, 4, 5}));
    students.add(new Student(2, new int[]{2, 1, 2, 3, 2, 4, 2, 5}));
    students.add(new Student(3, new int[]{3, 3, 1, 1, 2, 2, 4, 4, 5, 5}));
  }

  class Student {
    private final int id;
    private final int[] answerPattern;
    private int score = 0;

    Student(
        int id,
        int[] answerPattern
    ) {
      this.id = id;
      this.answerPattern = answerPattern;
    }

    public void trySolve(
        int questionId,
        int correctAnswer
    ) {
      if (answerPattern.length <= questionId) {
        questionId %= answerPattern.length;
      }

      if (answerPattern[questionId] == correctAnswer) {
        score++;
      }
    }

    public int getScore() {
      return score;
    }

    public int getId() {
      return id;
    }
  }

}
