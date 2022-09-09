/**
 * 프로그래머스 / 81302 / 거리두기 확인하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81302
 * solve: 47분
 */

package programmers.programmers.private2208.week3.test2;

public class Solution3 {

  private static final char PERSON = 'P';
  private static final char PARTITION = 'X';
  private static final int PLACE_H = 5;
  private static final int PLACE_W = 5;
  private boolean[][] isVisited;
  private char[][] placeInfos;

  public int[] solution(String[][] places) {
    return checkAllSocialDistance(places);
  }

  private int[] checkAllSocialDistance(String[][] places) {
    int[] keepDistance = new int[places.length];

    for (int i = 0; i < places.length; i++) {
      String[] place = places[i];

      keepDistance[i] = checkSocialDistance(place);

    }

    return keepDistance;
  }

  private int checkSocialDistance(String[] place) {
    this.placeInfos = new char[PLACE_H][PLACE_W];
    for (int i = 0; i < PLACE_H; i++) {
      this.placeInfos[i] = place[i].toCharArray();
    }

    this.isVisited = new boolean[PLACE_H][PLACE_W];

    for (int h = 0; h < PLACE_H; h++) {
      for (int w = 0; w < PLACE_W; w++) {
        if (placeInfos[h][w] != PERSON) {
          continue;
        }
        if (isKeepDistance(0, h, w) == 0) {
          return 0;
        }
      }
    }

    return 1;
  }

  private int isKeepDistance(
      int depth,
      int x,
      int y
  ) {
    if (depth == 3 || this.placeInfos[x][y] == PARTITION) {
      return 1;
    }

    if (depth != 0 && this.placeInfos[x][y] == PERSON) {
      return 0;
    }

    isVisited[x][y] = true;
    int result = 1;

    for (Direction direction : Direction.values()) {
      int nextX = x + direction.dx;
      int nextY = y + direction.dy;

      if (nextX < 0 || PLACE_H <= nextX || nextY < 0 || PLACE_W <= nextY || isVisited[nextX][nextY]) {
        continue;
      }

      result *= isKeepDistance(depth+1, nextX, nextY);
    }

    if (depth != 0 ) {
      isVisited[x][y] = false;
    }

    return result;

  }

  enum Direction {
    NORTH(-1, 0),
    EAST(0, 1),
    SOUTH(1, 0),
    WEST(0, -1);

    final int dx;
    final int dy;

    Direction(
        int dx,
        int dy
    ) {
      this.dx = dx;
      this.dy = dy;
    }
  }
}
