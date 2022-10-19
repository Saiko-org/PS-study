
// 리트코드 / 733 / Flood Fill
// https://leetcode.com/problems/flood-fill/
// solve:

class Solution {
    final int DY[] = {-1, 1, 0, 0};
    final int DX[] = {0, 0, -1, 1};
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int c = image[sr][sc];
        image[sr][sc] = color;
        boolean visited[][] = new boolean[image.length][image[0].length];
        visited[sr][sc] = true;
        dfs(sr, sc, c, image, color, visited);
        return image;
    }
    private void dfs(int y, int x, int c, int[][] image, int color, boolean visited[][]) {
        for (int i = 0; i < DY.length; i++) {
            int ny = y + DY[i];
            int nx = x + DX[i];

            if (isOutOfArray(ny, nx, image.length, image[0].length)) {
                continue;
            }
            if (visited[ny][nx]) {
                continue;
            }
            if (image[ny][nx] != c) {
                continue;
            }
            image[ny][nx] = color;
            visited[ny][nx] = true;
            dfs(ny, nx, c, image, color, visited);
        }
    }
    private boolean isOutOfArray(int y, int x, int r, int c) {
        if (y < 0 || x < 0 || y >= r || x >= c) {
            return true;
        }
        return false;
    }
}
