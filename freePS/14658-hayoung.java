// 백준 / 14658 / 하늘에서 별똥별이 빗발친다
// https://www.acmicpc.net/problem/14658
// add:

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

class Main {


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String[] input = br.readLine().split(" ");
    int n = Integer.parseInt(input[0]); //가로
    int m = Integer.parseInt(input[1]); //세로
    int l = Integer.parseInt(input[2]); // 트램펄린 한변 길이
    int k = Integer.parseInt(input[3]); // 별똥별 수

    List<int[]> stars = new ArrayList<>();

    for (int i = 0; i < k; i++) {
      input = br.readLine().split(" ");
      stars.add(new int[]{Integer.parseInt(input[1]), Integer.parseInt(input[0])});
    }

    int max = 0;
    for (int r = 0; r < k; r++) {
      for (int c = 0; c < k; c++) {
        int count = 0;
        int y = stars.get(r)[0];
        int x = stars.get(c)[1];
        for (int star[] : stars) {
          if (isBound(star, y, x, l)) {
            count++;
          }
        }
        max = Math.max(max, count);
      }
    }
    System.out.println(k - max);
  }

  private static boolean isBound(int star[], int y, int x, int l) {
    return star[0] >= y && star[0] <= y + l && star[1] >= x && star[1] <= x + l;
  }
}

