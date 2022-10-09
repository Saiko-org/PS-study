/**
 * 프로그래머스 / 92345 / 사라지는 발판
 * https://school.programmers.co.kr/learn/courses/30/lessons/92345
 * fail
 */


import java.util.*;

class Location {
    private int y;
    private int x;
    Location(int y, int x) {
        this.y = y;
        this.x = x;
    }
    
    public int getY() {
        return y;
    }
    
    public int getX() {
        return x;
    }
}

class Solution {
    final int D = 4;
    final int DY[] = {-1, 1, 0, 0};
    final int DX[] = {0, 0, -1, 1};
    int user1WinRound = Integer.MAX_VALUE;
    int user2WinRound = Integer.MAX_VALUE;
    public int solution(int[][] board, int[] aloc, int[] bloc) {
        startGame(aloc[0], aloc[1], bloc[0], bloc[1], true, 0, board);

    int answer = Math.min(user1WinRound, user2WinRound);
    return answer == Integer.MAX_VALUE ? 0 : answer;
  }

  private void startGame(int my, int mx, int yy, int yx, boolean isA, int round,
    int board[][]) {
    if (board[my][mx] == 0) {
      if (isA) {
        user2WinRound = Math.min(user2WinRound, round);
        return;
      }
      user1WinRound = Math.min(user1WinRound, round);
      return;

    }

    Queue<Location> hold = new LinkedList<>();
    int possibleDirection = 0;
    for (int d = 0; d < D; d++) {
      int ny = my + DY[d];
      int nx = mx + DX[d];

      if (isOutOfArray(ny, nx, board.length, board[0].length)) {
        continue;
      }

      if (board[ny][nx] == 0) {
        continue;
      }

      possibleDirection++;
      if (ny == yy && nx == yx) {
        hold.add(new Location(ny, nx));
        continue;
      }

      board[my][mx] = 0;
      startGame(yy, yx, ny, nx, !isA, round + 1, board);
      board[my][mx] = 1;
    }
      
    if (Math.min(user1WinRound, user2WinRound) == Integer.MAX_VALUE) {
      while (!hold.isEmpty()) {
        Location loc = hold.poll();
        board[my][mx] = 0;
        startGame(yy, yx, loc.getY(), loc.getX(), !isA, round + 1, board);
        board[my][mx] = 1;
      }
    }
      
    if (possibleDirection == 0) {
      if (isA) {
        user2WinRound = Math.min(user2WinRound, round);
        return;
      }
      user1WinRound = Math.min(user1WinRound, round);
    }
  }

  private boolean isOutOfArray(int y, int x, int r, int c) {
    if (y < 0 || y >= r || x < 0 || x >= c) {
      return true;
    }
    return false;
  }

}

