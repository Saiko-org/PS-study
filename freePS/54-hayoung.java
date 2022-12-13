// 리트코드 / 54 / Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
// solve:

class Solution {
    static final int DY[] = {0, 1, 0, -1};
    static final int DX[] = {1, 0, -1, 0};
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();
        boolean visited[][] = new boolean[matrix.length][matrix[0].length];

        visited[0][0] = true;
        list.add(matrix[0][0]);

        solve(0, 0, 0, 1, matrix, visited, list);
        return list;
    }
    private void solve(int y, int x, int d, int index, int[][] matrix, boolean visited[][],
    List<Integer> list) {
        if (list.size() == matrix.length * matrix[0].length) {
            return;
        }       
    int ny = y + DY[d];
    int nx = x + DX[d];

    if (!isOutOfArray(ny, nx, matrix.length, matrix[0].length)
      && !visited[ny][nx]) {
      visited[ny][nx] = true;
      list.add(matrix[ny][nx]);
      solve(ny, nx, d, index, matrix, visited, list);
    } else {
      ny = y + DY[index % DY.length];
      nx = x + DX[index % DY.length];

      visited[ny][nx] = true;
      list.add(matrix[ny][nx]);
      solve(ny, nx, index % DY.length, index + 1, matrix, visited, list);
    }
  }

  private boolean isOutOfArray(int y, int x, int r, int c) {
    return y < 0 || x < 0 || y >= r || x >= c;
  }
}


