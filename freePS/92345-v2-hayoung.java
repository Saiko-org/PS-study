// 프로그래머스 / 92345 / 사라지는 발판
// https://school.programmers.co.kr/learn/courses/30/lessons/92345
// add:


import java.util.*;



class Solution {
  final int D = 4;
  final int DY[] = {-1, 1, 0, 0};
  final int DX[] = {0, 0, -1, 1};

    public int solution(int[][] board, int[] aloc, int[] bloc) {
        int[] result = startGame(aloc[0], aloc[1], bloc[0], bloc[1], true, 0, board);
    return result[2];


  }

  private int[] startGame(int my, int mx, int yy, int yx, boolean isA, int round,
    int board[][]) {
    int answer[] = new int[]{0, 0, round}; // a or b, 이겼는지 ,  게임 라운드

    if (!isA) {
      answer[0] = 1;
    }

    if (board[my][mx] == 0) {
      return answer;
    }

    for (int d = 0; d < D; d++) {
      int ny = my + DY[d];
      int nx = mx + DX[d];

      if (isOutOfArray(ny, nx, board.length, board[0].length)) {
        continue;
      }

      if (board[ny][nx] == 0) {
        continue;
      }

      board[my][mx] = 0;
      int[] result = startGame(yy, yx, ny, nx, !isA, round + 1, board);

      if (isA && result[0] == 1) {
        result[0] = 0;
        result[1] = result[1] == 0 ? 1 : 0;
      } else if (!isA && result[0] == 0) {
        result[0] = 1;
        result[1] = result[1] == 0 ? 1 : 0;
      }

      if (answer[1] == 1 && result[1] == 1 && answer[2] >= result[2]) { // 이겼는데 이긴 경우
        answer[2] = result[2];
      } else if (answer[1] == 0 && result[1] == 0 && answer[2] <= result[2]) { // 졌는데 진 경우
        answer[2] = result[2];
      } else if (answer[1] == 0 && result[1] == 1) { // 졌는데 이긴 경우
        answer[1] = result[1];
        answer[2] = result[2];
      }
      board[my][mx] = 1;
    }
    return answer;
  }

  private boolean isOutOfArray(int y, int x, int r, int c) {
    if (y < 0 || y >= r || x < 0 || x >= c) {
      return true;
    }
    return false;
  }

}

