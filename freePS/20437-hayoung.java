// 백준 / 20437 / 문자열 게임 2
// https://www.acmicpc.net/problem/20437
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;

class Main {

  private static final int MAX = 10001;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int t = Integer.parseInt(br.readLine());
    for (int i = 0; i < t; i++) {
      String s = br.readLine();
      int k = Integer.parseInt(br.readLine());

      int min = MAX;
      int max = 0;
      Queue<Integer> alphabet[] = new LinkedList[26];
      for (int j = 0; j < 26; j++) {
        alphabet[j] = new LinkedList<>();
      }

      for (int j = 0; j < s.length(); j++) {
        int c = s.charAt(j) - 'a';
        alphabet[c].add(j);

        if (alphabet[c].size() >= k) {
          int len = j - alphabet[c].poll() + 1;
          min = Math.min(min, len);
          max = Math.max(max, len);
        }

      }
      if (min == MAX) {
        bw.write(-1 + " " + "\n");
      } else {
        bw.write(min + " " + max + "\n");
      }
    }

    bw.flush();
  }
}

