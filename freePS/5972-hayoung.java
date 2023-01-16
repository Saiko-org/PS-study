// 백준 / 5972 / 택배 배송
// https://www.acmicpc.net/problem/5972
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    String[] input = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]);
    int m = Integer.parseInt(input[1]);

    List<int[]>[] edges = new ArrayList[n + 1];
    for (int i = 1; i <= n; i++) {
      edges[i] = new ArrayList<>();
    }

    for (int i = 0; i < m; i++) {
      input = br.readLine().split(" ");
      int a = Integer.parseInt(input[0]);
      int b = Integer.parseInt(input[1]);
      int c = Integer.parseInt(input[2]);

      edges[a].add(new int[]{b, c});
      edges[b].add(new int[]{a, c});
    }

    int dp[] = new int[n + 1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[1] = 0;
    Queue<int[]> queue = new PriorityQueue<>(Comparator.comparingInt(o -> o[1]));
    queue.add(new int[]{1, 0});
    while (!queue.isEmpty()) {
      int[] p = queue.poll();
      int index = p[0];
      int cost = p[1];
      if (index == n) {
        System.out.println(cost);
        break;
      }
      if (dp[index] < cost) {
        continue;
      }
      for (int i = 0; i < edges[p[0]].size(); i++) {
        int next[] = edges[p[0]].get(i);
        int nextIndex = next[0];
        int nextCost = next[1];
        if (dp[nextIndex] > nextCost + cost) {
          dp[nextIndex] = nextCost + cost;
          queue.add(new int[]{nextIndex, dp[nextIndex]});
        }
      }
    }
  }
}

