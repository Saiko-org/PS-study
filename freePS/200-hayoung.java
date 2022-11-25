// 리트코드 / 200 / Number of Islands
// https://leetcode.com/problems/number-of-islands/
// solve:


class Solution {
    final int DIRECTION_SIZE = 4;
    final int DY[] = {-1, 1, 0, 0};
    final int DX[] = {0, 0, -1, 1};
    public int numIslands(char[][] grid) {
        boolean visited[][] = new boolean[grid.length][grid[0].length];

        int answer = 0;
        for (int i = 0; i < visited.length; i++) {
            for (int j = 0; j < visited[0].length; j++) {
                if (grid[i][j] == '1' && !visited[i][j]) {
                    visited[i][j] = true;
                    dfs(i, j, grid, visited);
                    answer++;
                }
            }
        }   
        return answer;     
    }

    private void dfs(int y, int x, char[][] grid, boolean visited[][]) {
        for (int i = 0; i < DIRECTION_SIZE; i++) {
            int ny = y + DY[i];
            int nx = x + DX[i];

            if (isOutOfArray(ny, nx, grid.length, grid[0].length)) {
                continue;
            }
            if (grid[ny][nx] == '0') {
                continue;
            }

            if (visited[ny][nx]) {
                continue;
            }

            visited[ny][nx] = true;
            dfs(ny, nx, grid, visited);
        }
    }
    private boolean isOutOfArray(int y, int x, int r, int c) {
        return y < 0 || x < 0 || y >= r || x >= c;
    }
}
