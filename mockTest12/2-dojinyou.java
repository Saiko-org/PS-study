/**
 *  프로그래머스 / 1878 / 나머지 한 점
 *  https://school.programmers.co.kr/learn/courses/18/lessons/1878
 *  solve: 18분
 */

public class Solution {

  public static final int POINT_DIMENSION = 2;
  public static final int INDEX_X = 0;
  public static final int INDEX_Y = 1;

  public int[] solution(int[][] otherPoints) {
    return getAnotherPoint(otherPoints);
  }

  private int[] getAnotherPoint(int[][] otherPoints) {
    int[] newPoint = new int[POINT_DIMENSION];

    newPoint[INDEX_X] = getPoint(otherPoints, INDEX_X);
    newPoint[INDEX_Y] = getPoint(otherPoints, INDEX_Y);

    return newPoint;
  }

  private int getPoint(
      int[][] otherPoints,
      int index
  ) {
    if (otherPoints[0][index] == otherPoints[1][index]) {
      return otherPoints[2][index];
    }

    if (otherPoints[0][index] == otherPoints[2][index]) {
      return otherPoints[1][index];
    }

    return otherPoints[0][index];
  }
}
