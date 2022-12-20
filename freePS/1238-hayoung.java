// 백준 / 1238 / 파티
// https://www.acmicpc.net/problem/1238
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    String[] input = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]);
    int m = Integer.parseInt(input[1]);
    int x = Integer.parseInt(input[2]);

    int dp[][] = new int[n + 1][n + 1];

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        if (i == j) {
          dp[i][j] = 0;
          continue;
        }
        dp[i][j] = Integer.MAX_VALUE;
      }
    }

    for (int i = 0; i < m; i++) {
      input = br.readLine().split(" ");
      int a = Integer.parseInt(input[0]);
      int b = Integer.parseInt(input[1]);
      int c = Integer.parseInt(input[2]);

      dp[a][b] = c;
    }

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        for (int k = 1; k <= n; k++) {
          if (dp[j][i] >= Integer.MAX_VALUE || dp[i][k] >= Integer.MAX_VALUE) {
            continue;
          }

          if (dp[j][k] > dp[j][i] + dp[i][k]) {
            dp[j][k] = dp[j][i] + dp[i][k];
          }
        }
      }
    }

    int answer = 0;
    for (int i = 1; i <= n; i++) {
      answer = Math.max(answer, dp[i][x] + dp[x][i]);
    }

    bw.write(answer + "\n");
    bw.flush();
    ;
  }
}

