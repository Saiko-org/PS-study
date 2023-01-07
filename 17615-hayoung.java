// 백준 / 17615 / 볼 모으기
// https://www.acmicpc.net/problem/17615
// solve:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

class Main {

  private static int min = 500001;

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int n = Integer.parseInt(br.readLine());
    int redBall = 0, blueBall = 0;
    String ball[] = new String[n];

    String[] input = br.readLine().split("");
    for (int i = 0; i < n; i++) {
      ball[i] = input[i];
      if (ball[i].equals("R")) {
        redBall++;
        continue;
      }
      blueBall++;
    }

    min = Math.min(redBall, blueBall);
    
    String color = ball[0];
    int count = 1;
    for (int i = 1; i < ball.length; i++) {
      if (!check(color, i, count, ball, redBall, blueBall)) {
        break;
      }
      count++;
    }
    color = ball[ball.length - 1];
    count = 1;
    for (int i = ball.length - 2; i >= 0; i--) {
      if (!check(color, i, count, ball, redBall, blueBall)) {
        break;
      }
      count++;
    }

    System.out.println(min);
  }

  private static boolean check(String color, int i, int count, String[] ball, int redBall,
    int blueBall) {
    if (!ball[i].equals(color)) {
      if (color.equals("R")) {
        min = Math.min(min, redBall - count);
      } else {
        min = Math.min(min, blueBall - count);
      }
      return false;
    }
    return true;
  }
}

