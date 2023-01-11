// 백준 / 15989 / 1, 2, 3 더하기 4
// https://www.acmicpc.net/problem/15989
// add:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int dp[][] = new int[10001][4];
    dp[1][1] = 1;
    dp[2][1] = 1;
    dp[2][2] = 1;
    dp[3][1] = 1;
    dp[3][2] = 1;
    dp[3][3] = 1;

    for (int i = 4; i <= 10000; i++) {
      dp[i][1] = dp[i - 1][1];
      dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
      dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
    }

    int t = Integer.parseInt(br.readLine());
    for (int i = 0; i < t; i++) {
      int n = Integer.parseInt(br.readLine());
      bw.write(dp[n][1] + dp[n][2] + dp[n][3] + "\n");
    }
    bw.flush();
  }
}

