// 백준 / 15591 / MooTube (Silver)
// https://www.acmicpc.net/problem/15591
// add:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    String input[] = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]);
    int q = Integer.parseInt(input[1]);

    List<int[]>[] usado = new ArrayList[n + 1];
    for (int i = 1; i <= n; i++) {
      usado[i] = new ArrayList<>();
    }
    for (int i = 0; i < n - 1; i++) {
      input = br.readLine().split(" ");
      int a = Integer.parseInt(input[0]);
      int b = Integer.parseInt(input[1]);
      int c = Integer.parseInt(input[2]);
      usado[a].add(new int[]{b, c});
      usado[b].add(new int[]{a, c});
    }


    for (int i = 0; i < q; i++) {
      input = br.readLine().split(" ");
      int k = Integer.parseInt(input[0]);
      int v = Integer.parseInt(input[1]);
      int count = 0;
      Queue<Integer> queue = new LinkedList<>();
      queue.add(v);
      boolean visited[] = new boolean[n + 1];
      visited[v] = true;

      while (!queue.isEmpty()) {
        int next = queue.poll();
        for (int[] a : usado[next]) {
          if (visited[a[0]]) {
            continue;
          }
          if (a[1] < k) {
            continue;
          }
          visited[a[0]] = true;
          queue.add(a[0]);
          count++;
        }
      }
      bw.write(count + "\n");
    }
    bw.flush();
  }
}

