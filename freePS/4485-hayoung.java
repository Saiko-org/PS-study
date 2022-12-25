// 백준 / 4485 / 녹색 옷 입은 애가 젤다지?
// https://www.acmicpc.net/problem/4485
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;


class Main {

  private static int DY[] = {-1, 1, 0, 0};
  private static int DX[] = {0, 0, -1, 1};
  private static int map[][];

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    for (int count = 1; ; count++) {
      int n = Integer.parseInt(br.readLine());
      if (n == 0) {
        break;
      }
      map = new int[n][n];

      for (int i = 0; i < n; i++) {
        String[] input = br.readLine().split(" ");
        for (int j = 0; j < n; j++) {
          map[i][j] = Integer.parseInt(input[j]);
        }
      }
      int answer = dijkstra();
      bw.write("Problem " + count + ": " + answer + "\n");

    }
    bw.flush();
  }

  private static int dijkstra() {
    int dp[][] = new int[map.length][map[0].length];
    for (int i = 0; i < dp.length; i++) {
      Arrays.fill(dp[i], Integer.MAX_VALUE);
    }

    dp[0][0] = map[0][0];
    Queue<int[]> queue = new PriorityQueue<>(Comparator.comparingInt(o -> o[2]));
    queue.add(new int[]{0, 0, map[0][0]});

    while (!queue.isEmpty()) {
      int[] cur = queue.poll();
      if (cur[0] == map.length - 1 && cur[1] == map[0].length) {
        return cur[2];
      }
      for (int i = 0; i < 4; i++) {
        int ny = cur[0] + DY[i];
        int nx = cur[1] + DX[i];
        if (isOutOfArray(ny, nx, map.length, map[0].length)) {
          continue;
        }
        if (cur[2] + map[ny][nx] >= dp[ny][nx]) {
          continue;
        }
        dp[ny][nx] = cur[2] + map[ny][nx];
        queue.add(new int[]{ny, nx, cur[2] + map[ny][nx]});
      }
    }
    return dp[map.length - 1][map[0].length - 1];
  }

  private static boolean isOutOfArray(int y, int x, int r, int c) {
    return y < 0 || x < 0 || y >= r || x >= c;
  }
}

