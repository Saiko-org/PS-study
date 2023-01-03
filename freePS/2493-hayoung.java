// 백준 / 2493 / 탑
// https://www.acmicpc.net/problem/2493
// add:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int n = Integer.parseInt(br.readLine());

    Stack<int[]> stack = new Stack<>();
    String[] input = br.readLine().split(" ");

    for (int i = 0; i < n; i++) {
      int value = Integer.parseInt(input[i]);
      boolean solve = false;
      while (!stack.isEmpty()) {
        int[] peek = stack.peek();
        if (peek[0] <= value) {
          stack.pop();
          continue;
        }
        solve = true;
        System.out.print(peek[1] + " ");
        break;
      }
      if (!solve) {
        System.out.print(0 + " ");
      }
      stack.add(new int[]{value, i + 1});
    }
  }
}

