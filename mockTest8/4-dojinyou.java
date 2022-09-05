/**
 * 프로그래머스 / 72415/ 카드 짝 맞추기
 * https://school.programmers.co.kr/learn/courses/30/lessons/72415
 * fail: 1시간
 */
package programmers.programmers.private2208.week3.test2;

public class Solution4 {
  private static final int CARD_H = 4;
  private static final int CARD_W = 4;
  public static final int REMOVED = 0;
  public static final int NOTTING = 0;

  private int[][] cards;
  private int currentTarget = 0;
  private int minMoveCount = Integer.MAX_VALUE;

  public int solution(
      int[][] board,
      int r,
      int c
  ) {
    this.cards = board;

    findMinMoveRoute(r, c, 0);

    return minMoveCount;
  }

  private void findMinMoveRoute(
      int x,
      int y,
      int count
  ) {
    boolean isEntered = false;

    if (cards[x][y] != REMOVED && (currentTarget == NOTTING || currentTarget == cards[x][y])) {
      currentTarget = currentTarget == NOTTING ? cards[x][y] : NOTTING;
      cards[x][y] = REMOVED;
      count++;
      isEntered = true;
    }

    if (isFinished()) {
      minMoveCount = Math.min(minMoveCount, count);

      if (isEntered) {
        cards[x][y] = currentTarget;
        currentTarget = 0;
      }
      return;
    }

    for (Direction direction : Direction.values()) {
      int nextX = x + direction.dx;
      int nextY = x + direction.dy;

      if (nextX < 0 || CARD_H <= nextX || nextY < 0 || CARD_W <= nextY) {
        continue;
      }
      // 한칸 이동
      findMinMoveRoute(nextX, nextY, count + 1);

      if (cards[nextX][nextY] != REMOVED) {
        continue;
      }

      // 다음 카드로 이동
      while (0 <= nextX && nextX < CARD_H && 0 <= nextY && nextY < CARD_W) {
        if (cards[nextX][nextY] != REMOVED) {
          findMinMoveRoute(nextX, nextY, count + 1);
          break;
        }

        nextX += direction.dx;
        nextY += direction.dy;
      }
    }

    if (isEntered) {
      cards[x][y] = currentTarget;
      currentTarget = 0;
    }

  }

  private boolean isFinished() {
    for (int[] cardRow : cards) {
      for (int cardState : cardRow) {
        if (cardState != REMOVED) {
          return false;
        }
      }
    }
    return true;
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
