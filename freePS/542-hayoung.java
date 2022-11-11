// 리트코드  / 542 / 01 Matrix
// https://leetcode.com/problems/01-matrix/
// add:

import java.util.*;

class Cell {

  private int y;
  private int x;
  private int c;

  public Cell(int y, int x, int c) {
    this.y = y;
    this.x = x;
    this.c = c;
  }

  public int getY() {
    return y;
  }

  public int getX() {
    return x;
  }

  public int getC() {
    return c;
  }
}
class Solution {
    private final int D = 4;
    private final int DY[] = {-1, 1, 0, 0};
    private final int DX[] = {0, 0, -1, 1};
    public int[][] updateMatrix(int[][] mat) {
        int answer[][] = new int[mat.length][mat[0].length];
    Queue<Cell> queue = new LinkedList<>();

    for (int i = 0; i < answer.length; i++) {
      Arrays.fill(answer[i], Integer.MAX_VALUE);
    }
    
    for (int i = 0; i < mat.length; i++) {
      for (int j = 0; j < mat[0].length; j++) {
        if (mat[i][j] == 0) {
          answer[i][j] = 0;
          queue.add(new Cell(i, j, 0));
        }
      }
    }
    
    solve(mat, answer, queue);
    return answer;
  }

  private void solve(int mat[][], int answer[][], Queue<Cell> queue) {
    while (!queue.isEmpty()) {
      Cell cell = queue.poll();
      for (int i = 0; i < D; i++) {
        int ny = cell.getY() + DY[i];
        int nx = cell.getX() + DX[i];

        if (isOutOfArray(ny, nx, mat.length, mat[0].length)) {
          continue;
        }
        if (answer[ny][nx] > cell.getC() + 1) {
          answer[ny][nx] = cell.getC() + 1;
          queue.add(new Cell(ny, nx, answer[ny][nx]));
        }
      }
    }
  }

  private boolean isOutOfArray(int y, int x, int r, int c) {
    if (y < 0 || x < 0 || y >= r || x >= c) {
      return true;
    }
    return false;
  }
}

