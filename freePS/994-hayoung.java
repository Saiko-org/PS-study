// 리트코드 / 994 / Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/
// solve:

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
    static final int DIRECTION_SIZE = 4;
    static final int DY[] = {-1, 1, 0, 0};
    static final int DX[] = {0, 0, -1, 1};

    public int orangesRotting(int[][] grid) {

        int freshOrange = 0;
        Queue<Location> queue = new LinkedList<>();

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    freshOrange++;
                }

                if (grid[i][j] == 2) {
                    queue.add(new Location(i, j));
                }
            }
        }

        return solve(freshOrange, queue, grid);
    }

    private int solve(int freshOrange, Queue<Location> queue, int[][] grid) {

    int minutes = 0;

    while (!queue.isEmpty()) {
        if (freshOrange == 0) {
          break;
        }
      ++minutes;
      int size = queue.size();
      for (int i = 0; i < size; i++) {
        Location loc = queue.poll();
        for (int j = 0; j < DIRECTION_SIZE; j++) {
          int ny = loc.getY() + DY[j];
          int nx = loc.getX() + DX[j];

          if (isOutOfArray(ny, nx, grid.length, grid[0].length)) {
            continue;
          }

          if (grid[ny][nx] != 1) {
            continue;
          }

          grid[ny][nx] = 2;
          freshOrange--;
          queue.add(new Location(ny, nx));
        }
      }
    }

    return freshOrange == 0 ? minutes : -1;
  }

  private boolean isOutOfArray(int y, int x, int r, int c) {
    return y < 0 || x < 0 || y >= r || x >= c;
  }
}
