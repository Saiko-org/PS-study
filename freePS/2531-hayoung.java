// 백준 / 2531 / 회전 초밥
// https://www.acmicpc.net/problem/2531
// solve:

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String[] input = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]);
    int d = Integer.parseInt(input[1]);
    int k = Integer.parseInt(input[2]);
    int c = Integer.parseInt(input[3]);

    int sushi[] = new int[n];
    for (int i = 0; i < n; i++) {
      sushi[i] = Integer.parseInt(br.readLine());
    }

    int answer = 0;
    int[] plates = new int[d + 1];
    int count = 0;
    int type = 0;
    for (int i = 0; i < k; i++) {
      plates[sushi[i]]++;
      count++;
      if (plates[sushi[i]] == 1) {
        type++;
      }
    }

    for (int i = 1; i < n; i++) { // 30000
      plates[sushi[(i - 1)]]--;
      count--;
      if (plates[sushi[(i - 1)]] == 0) {
        type--;
      }
      plates[sushi[(i + k - 1) % sushi.length]]++;
      count++;
      if (plates[sushi[(i + k - 1) % sushi.length]] == 1) {
        type++;
      }
      if (count >= k) {
        if (plates[c] == 0) {
          answer = Math.max(answer, type + 1);
        }
      }
      answer = Math.max(answer, type);
    }

    System.out.println(answer);
  }
}

