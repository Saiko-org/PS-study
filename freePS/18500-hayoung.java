// 백준 / 18500 / 미네랄 2
// https://www.acmicpc.net/problem/18500
// add:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Main {

  private static final int DY[] = {-1, 1, 0, 0};
  private static final int DX[] = {0, 0, -1, 1};

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    String input[] = br.readLine().split(" ");
    int r = Integer.parseInt(input[0]);
    int c = Integer.parseInt(input[1]);

    char map[][] = new char[r][c];

    for (int i = 0; i < r; i++) {
      input = br.readLine().split("");
      for (int j = 0; j < c; j++) {
        map[i][j] = input[j].charAt(0);
      }
    }

    int n = Integer.parseInt(br.readLine());
    boolean direction = false; // false -> left, true -> right
    input = br.readLine().split(" ");
    for (int i = 0; i < n; i++) {
      int y = r - Integer.parseInt(input[i]);
      int x = shootBar(y, direction, map);
      direction = !direction;
      if (x == -1) {
        continue;
      }

      boolean[][] visited = new boolean[r][c];
      visited[y][x] = true;

      char newMap[][] = new char[map.length][map[0].length];
      for (int j = 0; j < map.length; j++) {
        newMap[j] = Arrays.copyOf(map[j], map[j].length);
      }

      for (int j = 0; j < DY.length; j++) {

        int ny = y + DY[j];
        int nx = x + DX[j];

        if (isOutOfArray(ny, nx, map.length, map[0].length)) {
          continue;
        }

        if (visited[ny][nx]) {
          continue;
        }
        if (map[ny][nx] == '.') {
          continue;
        }
        List<Integer>[] cluster = new ArrayList[r];
        for (int k = 0; k < r; k++) {
          cluster[k] = new ArrayList<>();
        }
        visited[ny][nx] = true;
        cluster[ny].add(nx);
        findCluster(ny, nx, map, visited, cluster);
        if (cluster[r - 1].size() == 0) {
          dropCluster(cluster, newMap);
        }
      }
      map = newMap;
    }

    for (int i = 0; i < map.length; i++) {
      for (int j = 0; j < map[i].length; j++) {
        bw.write(map[i][j]);
      }
      bw.write("\n");
    }
    bw.flush();
  }

  private static int shootBar(int height, boolean direction, char map[][]) {
    if (!direction) {
      for (int c = 0; c < map[height].length; c++) {
        if (map[height][c] == 'x') {
          map[height][c] = '.';
          return c;
        }
      }
    } else {
      for (int c = map[height].length - 1; c >= 0; c--) {
        if (map[height][c] == 'x') {
          map[height][c] = '.';
          return c;
        }
      }
    }
    return -1;
  }

  private static void findCluster(int y, int x, char map[][], boolean visited[][],
    List<Integer>[] cluster) {
    for (int i = 0; i < DY.length; i++) {
      int ny = y + DY[i];
      int nx = x + DX[i];
      if (isOutOfArray(ny, nx, map.length, map[0].length)) {
        continue;
      }
      if (map[ny][nx] == '.') {
        continue;
      }
      if (visited[ny][nx]) {
        continue;
      }
      visited[ny][nx] = true;
      cluster[ny].add(nx);
      findCluster(ny, nx, map, visited, cluster);
    }
  }

  private static void dropCluster(List<Integer>[] cluster, char map[][]) {
    int count = 1;

    char tempMap[][] = new char[map.length][map[0].length];
    char result[][] = new char[map.length][map[0].length];

    boolean possible = true;
    while (possible) {
      for (int i = 0; i < map.length; i++) {
        tempMap[i] = Arrays.copyOf(map[i], map[i].length);
      }
      for (int i = map.length - 1; i >= 0; i--) {
        for (int j = 0; j < cluster[i].size(); j++) {
          int c = cluster[i].get(j);
          if (i + count >= map.length || tempMap[i + count][c] == 'x') {
            possible = false;
            break;
          }
          tempMap[i][c] = '.';
          tempMap[i + count][c] = 'x';
        }
        if (!possible) {
          break;
        }
      }
      if (!possible) {
        break;
      }
      for (int j = 0; j < map.length; j++) {
        result[j] = Arrays.copyOf(tempMap[j], tempMap[j].length);
      }
      count++;
    }
    for (int j = 0; j < map.length; j++) {
      map[j] = Arrays.copyOf(result[j], result[j].length);
    }
  }

  private static boolean isOutOfArray(int y, int x, int r, int c) {
    return y < 0 || x < 0 || y >= r || x >= c;
  }
}

