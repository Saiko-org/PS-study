// 백준 / 1253 / 좋다
// https://www.acmicpc.net/problem/1253
// add:

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

class Main {


  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(br.readLine());

    String[] input = br.readLine().split(" ");

    int nums[] = new int[input.length];
    for (int i = 0; i < input.length; i++) {
      nums[i] = Integer.parseInt(input[i]);
    }

    Arrays.sort(nums);
    int count = 0;
    for (int i = 0; i < nums.length; i++) {
      int num = nums[i];
      int left = 0;
      int right = nums.length - 1;

      while (left < right) {
        if (left == i) {
          left++;
        }
        if (right == i) {
          right--;
        }

        if (left >= right) {
          break;
        }
        int sum = nums[left] + nums[right];

        if (sum == num) {
          count++;
          break;
        }
        if (sum < num) {
          left++;
          continue;
        }
        right--;
      }
    }
    System.out.println(count);
  }
}

