// 백준 / 22233 / 가희와 키워드
// https://www.acmicpc.net/problem/22233
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.HashSet;
import java.util.Set;

class Main {


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    String[] input = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]);
    int m = Integer.parseInt(input[1]);
    Set<String> memo = new HashSet<>();

    for (int i = 0; i < n; i++) {
      memo.add(br.readLine());
    }

    for (int i = 0; i < m; i++) {
      input = br.readLine().split(",");
      for (int j = 0; j < input.length; j++) {
        memo.remove(input[j]);
      }
      bw.write(memo.size() + "\n");
    }

    bw.flush();
  }
}

